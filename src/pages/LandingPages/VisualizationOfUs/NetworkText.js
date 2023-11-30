import * as d3 from "d3";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const OurVisText = ({ data, width, height }) => {
  const svgRef = useRef(null);
  const simulation = useRef(null); // Define simulation with useRef
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const container = svgRef.current.parentNode;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const zoomLevel = 2.5; // Example zoom level (2x)
    const centerX = width / 2;
    const centerY = height / 2;
    const zoomedWidth = width / zoomLevel;
    const zoomedHeight = height / zoomLevel;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [
        centerX - zoomedWidth / 2,
        centerY - zoomedHeight / 2,
        zoomedWidth,
        zoomedHeight,
      ]);
    // Clear the SVG container
    svg.selectAll("*").remove();

    const g = svg.append("g");

    const color = d3.scaleOrdinal(d3.schemePastel1);

    const links = data.links.map((d) => ({ ...d }));
    const nodes = data.nodes.map((d) => ({ ...d }));

    const link = g
      .append("g")
      .attr("stroke", "#e6d7ff")
      .attr("stroke-opacity", 0.6)
      .selectAll()
      .data(links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = g
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll()
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", (d) => color(d.group));

    const text = g
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .style("fill", "#000")
      .style("font-size", (d) => (d.id === "Andie" || d.id === "Charlotte" ? "0.4rem" : "0.2rem")) // Larger font for Andie and Charlotte
      .text((d) => d.id);

    // Add a drag behavior.
    node.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.current.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.current.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    simulation.current = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    // Ticked function
    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 5);

      text
        .attr("x", (d) => (d.id === "Andie" || d.id === "Charlotte" ? d.x + 7 : d.x + 5)) // Different positioning for Andie and Charlotte
        .attr("y", (d) => (d.id === "Andie" || d.id === "Charlotte" ? d.y + 7 : d.y + 5));
    }
  }, [data, width, height]); // Add width and height as dependencies

  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current && containerRef.current) {
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;

        // Update the SVG dimensions
        d3.select(svgRef.current)
          .attr("width", newWidth)
          .attr("height", newHeight)
          .attr("viewBox", [0, 0, newWidth, newHeight]);

        // Update the simulation center force
        simulation.current.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.current.alpha(1).restart(); // Restart the simulation with the new center
      }
    };

    window.addEventListener("resize", handleResize);
    // Call handleResize initially to set the correct dimensions
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array

  return <svg ref={svgRef}></svg>;
};

export default OurVisText;

OurVisText.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
