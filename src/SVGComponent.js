import React,{useRef, useState, useEffect} from "react";
import './SVG.css'
import tableData from './tableData.json'

const SVGComponent = (props) => {
  const[selectedGroup, setSelectedGroup] = useState(null)
  const svgRef = useRef(null)

  useEffect(() => {
    if (selectedGroup) {
      scrollToSelectedGroup(selectedGroup);
    }
  }, [selectedGroup]);
  
  const handleClick = (groupId) => {
    if(selectedGroup === groupId) {
      setSelectedGroup(null)
    } else {
      setSelectedGroup(groupId)
    }
  }

  const scrollToSelectedGroup = (groupId) => {
    if (svgRef.current) {
      const groupElement = svgRef.current.querySelector(`#group-${groupId}`);
      if (groupElement) {
        groupElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const renderTable = (groupId) => {
    const groupData = tableData[groupId]

    if(groupData){
      const {headers, data} = groupData

      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }

    return null;
  }

  const svgClass = selectedGroup ? 'w-full' : 'w-full';
  const divClass = selectedGroup ? 'w-1/2' : 'hidden';

return (
  <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900 overflow-hidden">
    

  <svg
    // width={960}
    // height={640}
    id="chart-svg"
    className={svgClass + ' bg-white dark:bg-gray-900'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 960 640"
    {...props}
  >
    <defs id="svg-defs-internal">
      <filter
        id="svg-filter-DraggingFilter"
        filterUnits="objectBoundingBox"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
      >
        <feColorMatrix type="luminanceToAlpha" />
      </filter>
      <filter
        id="svg-filter-ResizingFilter"
        filterUnits="objectBoundingBox"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
      >
        <feColorMatrix type="saturate" values={2} />
      </filter>
      <filter
        id="svg-filter-NotSelected"
        filterUnits="objectBoundingBox"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
      >
        <feComponentTransfer>
          <feFuncA type="linear" slope={0.4} />
        </feComponentTransfer>
      </filter>
      <symbol id="tb-resize" width={10} height={10} viewBox="0 0 10 10">
        <path
          x={1}
          y={1}
          width={8}
          height={8}
          style={{
            strokeWidth: 1,
            stroke: "black",
            fill: "darkgrey",
            opacity: 0.6,
            cursor: "ne-resize",
          }}
          d="M1.024 1.024H9.219V9.219H1.024V1.024z"
        />
        <text x={1} y={9} fontSize="x-small" style={{ pointerEvents: "none" }}>
          {"\uD83E\uDC57"}
        </text>
        <text x={2} y={8} fontSize="x-small" style={{ pointerEvents: "none" }}>
          {"\uD83E\uDC55"}
        </text>
      </symbol>
      <symbol id="tb-clone-RU" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="m8.297 10.448 -4.609 4.609 1.741 1.741 4.609 -4.609L13.316 15.365V7.17H5.122z" />
          <path d="M17.414 20.487V3.073H0v17.414zM1.024 4.097h15.365v15.365H1.024z" />
          <path d="M3.073 0v3.073h1.024V1.024h15.365v15.365h-2.049v1.024h3.073V0z" />
        </g>
      </symbol>
      <symbol id="tb-clone-LU" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="m12.19 10.448 4.609 4.609 -1.741 1.741 -4.609 -4.609L7.17 15.365V7.17h8.195z" />
          <path d="M20.487 20.487V3.073H3.073v17.414zm-1.024 -1.024H4.097V4.097h15.365z" />
          <path d="M17.414 0v3.073h-1.024V1.024H1.024v15.365h2.049v1.024H0V0z" />
        </g>
      </symbol>
      <symbol id="tb-clone-RD" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M11.37 13.111 6.761 8.502l1.741 -1.741 4.609 4.609L16.389 8.195v8.195H8.195z" />
          <path d="M20.487 20.487V3.073H3.073v17.414zm-1.024 -1.024H4.097V4.097h15.365z" />
          <path d="M17.414 0v3.073h-1.024V1.024H1.024v15.365h2.049v1.024H0V0z" />
        </g>
      </symbol>
      <symbol id="tb-clone-LD" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="m9.117 13.111 4.609 -4.609 -1.741 -1.741 -4.609 4.609L4.097 8.195v8.195h8.195z" />
          <path d="M17.414 20.487V3.073H0v17.414zM1.024 4.097h15.365v15.365H1.024z" />
          <path d="M3.073 0v3.073h1.024V1.024h15.365v15.365h-2.049v1.024h3.073V0z" />
        </g>
      </symbol>
      <symbol id="tb-clone-U" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M8.195 11.268v6.146h3.073v-6.146h4.097L9.731 5.122 4.097 11.268z" />
          <path d="M1.024 0v20.487h17.414V0zm16.389 19.462H2.049V4.097h15.365zM2.049 3.073V1.024h15.365v2.049z" />
        </g>
      </symbol>
      <symbol id="tb-clone-D" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M11.268 9.219V3.073H8.195v6.146H4.097l5.634 6.146L15.365 9.219z" />
          <path d="M18.438 20.487V0H1.024v20.487zM2.049 1.024h15.365v15.365H2.049zm15.365 16.389v2.049H2.049v-2.049z" />
        </g>
      </symbol>
      <symbol id="tb-flip" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M11.268 4.097v16.389l8.195 -4.097V0z" />
          <path d="M1.024 0v16.389l8.195 4.097V4.097zm7.17 18.848 -6.146 -3.073V1.639l6.146 3.073z" />
        </g>
      </symbol>
      <symbol id="tb-forward" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M20.487 14.341V0H6.146v14.341z" />
          <path d="M13.316 13.316v6.146H1.024V7.17h6.146V6.146H0v14.341h14.341v-7.17z" />
        </g>
      </symbol>
      <symbol id="tb-backward" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <path
          d="M20.487 0H6.146v6.146H0v14.341h14.341v-6.146h6.146zm-1.024 13.316H7.17V1.024h12.292z"
          fill="#fff"
        />
      </symbol>
      <symbol id="tb-edit-group" viewBox="-3 -3 26 26">
        <path
          x={-2}
          y={-2}
          width={24}
          height={24}
          style={{
            strokeWidth: 2,
            stroke: "#242729",
            fill: "#6C7175",
            opacity: 0.7,
          }}
          d="M-2.049 -2.049H22.535V22.535H-2.049V-2.049z"
        />
        <g fill="#fff">
          <path d="M17.414 10.243v9.219H1.024V3.073h9.219l1.024 -1.024H0v18.438h18.438V9.219z" />
          <path d="m19.257 4.097 -10.141 10.141L4.097 16.389l2.151 -5.019L16.389 1.229z" />
        </g>
      </symbol>
      <pattern
        id="transparent-background"
        width={32}
        height={32}
        patternUnits="userSpaceOnUse"
      >
        <path
          x={0}
          y={0}
          width={16}
          height={16}
          fill="#E6E6E6"
          d="M0 0H16.389V16.389H0V0z"
        />
        <path
          x={16}
          y={16}
          width={16}
          height={16}
          fill="#E6E6E6"
          d="M16.389 16.389H32.778V32.778H16.389V16.389z"
        />
        <path
          x={0}
          y={16}
          width={16}
          height={16}
          fill="#FFFFFF"
          d="M0 16.389H16.389V32.778H0V16.389z"
        />
        <path
          x={16}
          y={0}
          width={16}
          height={16}
          fill="#FFFFFF"
          d="M16.389 0H32.778V16.389H16.389V0z"
        />
      </pattern>
      <pattern
        id="grid8L"
        x={0}
        y={0}
        width={64}
        height={32}
        patternUnits="userSpaceOnUse"
      >
        <path
          x1={0}
          y1={0}
          x2={64}
          y2={32}
          strokeWidth={1.0243277848911652}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 0L65.557 32.778"
        />
        <path
          x1={0}
          y2={0}
          x2={64}
          y1={32}
          strokeWidth={1.0243277848911652}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 32.778L65.557 0"
        />
      </pattern>
      <pattern
        id="grid8"
        x={-4}
        y={-2}
        width={64}
        height={32}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={4}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.122 2.049A1.024 1.024 0 0 1 4.097 3.073A1.024 1.024 0 0 1 3.073 2.049A1.024 1.024 0 0 1 5.122 2.049z"
        />
        <path
          cx={4}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.122 10.243A1.024 1.024 0 0 1 4.097 11.268A1.024 1.024 0 0 1 3.073 10.243A1.024 1.024 0 0 1 5.122 10.243z"
        />
        <path
          cx={4}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.122 18.438A1.024 1.024 0 0 1 4.097 19.462A1.024 1.024 0 0 1 3.073 18.438A1.024 1.024 0 0 1 5.122 18.438z"
        />
        <path
          cx={4}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.122 26.633A1.024 1.024 0 0 1 4.097 27.657A1.024 1.024 0 0 1 3.073 26.633A1.024 1.024 0 0 1 5.122 26.633z"
        />
        <path
          cx={12}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.316 2.049A1.024 1.024 0 0 1 12.292 3.073A1.024 1.024 0 0 1 11.268 2.049A1.024 1.024 0 0 1 13.316 2.049z"
        />
        <path
          cx={12}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.316 10.243A1.024 1.024 0 0 1 12.292 11.268A1.024 1.024 0 0 1 11.268 10.243A1.024 1.024 0 0 1 13.316 10.243z"
        />
        <path
          cx={12}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.316 18.438A1.024 1.024 0 0 1 12.292 19.462A1.024 1.024 0 0 1 11.268 18.438A1.024 1.024 0 0 1 13.316 18.438z"
        />
        <path
          cx={12}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.316 26.633A1.024 1.024 0 0 1 12.292 27.657A1.024 1.024 0 0 1 11.268 26.633A1.024 1.024 0 0 1 13.316 26.633z"
        />
        <path
          cx={20}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M21.511 2.049A1.024 1.024 0 0 1 20.487 3.073A1.024 1.024 0 0 1 19.462 2.049A1.024 1.024 0 0 1 21.511 2.049z"
        />
        <path
          cx={20}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M21.511 10.243A1.024 1.024 0 0 1 20.487 11.268A1.024 1.024 0 0 1 19.462 10.243A1.024 1.024 0 0 1 21.511 10.243z"
        />
        <path
          cx={20}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M21.511 18.438A1.024 1.024 0 0 1 20.487 19.462A1.024 1.024 0 0 1 19.462 18.438A1.024 1.024 0 0 1 21.511 18.438z"
        />
        <path
          cx={20}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M21.511 26.633A1.024 1.024 0 0 1 20.487 27.657A1.024 1.024 0 0 1 19.462 26.633A1.024 1.024 0 0 1 21.511 26.633z"
        />
        <path
          cx={28}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M29.706 2.049A1.024 1.024 0 0 1 28.681 3.073A1.024 1.024 0 0 1 27.657 2.049A1.024 1.024 0 0 1 29.706 2.049z"
        />
        <path
          cx={28}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M29.706 10.243A1.024 1.024 0 0 1 28.681 11.268A1.024 1.024 0 0 1 27.657 10.243A1.024 1.024 0 0 1 29.706 10.243z"
        />
        <path
          cx={28}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M29.706 18.438A1.024 1.024 0 0 1 28.681 19.462A1.024 1.024 0 0 1 27.657 18.438A1.024 1.024 0 0 1 29.706 18.438z"
        />
        <path
          cx={28}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M29.706 26.633A1.024 1.024 0 0 1 28.681 27.657A1.024 1.024 0 0 1 27.657 26.633A1.024 1.024 0 0 1 29.706 26.633z"
        />
        <path
          cx={36}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M37.9 2.049A1.024 1.024 0 0 1 36.876 3.073A1.024 1.024 0 0 1 35.851 2.049A1.024 1.024 0 0 1 37.9 2.049z"
        />
        <path
          cx={36}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M37.9 10.243A1.024 1.024 0 0 1 36.876 11.268A1.024 1.024 0 0 1 35.851 10.243A1.024 1.024 0 0 1 37.9 10.243z"
        />
        <path
          cx={36}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M37.9 18.438A1.024 1.024 0 0 1 36.876 19.462A1.024 1.024 0 0 1 35.851 18.438A1.024 1.024 0 0 1 37.9 18.438z"
        />
        <path
          cx={36}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M37.9 26.633A1.024 1.024 0 0 1 36.876 27.657A1.024 1.024 0 0 1 35.851 26.633A1.024 1.024 0 0 1 37.9 26.633z"
        />
        <path
          cx={44}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M46.095 2.049A1.024 1.024 0 0 1 45.07 3.073A1.024 1.024 0 0 1 44.046 2.049A1.024 1.024 0 0 1 46.095 2.049z"
        />
        <path
          cx={44}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M46.095 10.243A1.024 1.024 0 0 1 45.07 11.268A1.024 1.024 0 0 1 44.046 10.243A1.024 1.024 0 0 1 46.095 10.243z"
        />
        <path
          cx={44}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M46.095 18.438A1.024 1.024 0 0 1 45.07 19.462A1.024 1.024 0 0 1 44.046 18.438A1.024 1.024 0 0 1 46.095 18.438z"
        />
        <path
          cx={44}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M46.095 26.633A1.024 1.024 0 0 1 45.07 27.657A1.024 1.024 0 0 1 44.046 26.633A1.024 1.024 0 0 1 46.095 26.633z"
        />
        <path
          cx={52}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M54.289 2.049A1.024 1.024 0 0 1 53.265 3.073A1.024 1.024 0 0 1 52.241 2.049A1.024 1.024 0 0 1 54.289 2.049z"
        />
        <path
          cx={52}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M54.289 10.243A1.024 1.024 0 0 1 53.265 11.268A1.024 1.024 0 0 1 52.241 10.243A1.024 1.024 0 0 1 54.289 10.243z"
        />
        <path
          cx={52}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M54.289 18.438A1.024 1.024 0 0 1 53.265 19.462A1.024 1.024 0 0 1 52.241 18.438A1.024 1.024 0 0 1 54.289 18.438z"
        />
        <path
          cx={52}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M54.289 26.633A1.024 1.024 0 0 1 53.265 27.657A1.024 1.024 0 0 1 52.241 26.633A1.024 1.024 0 0 1 54.289 26.633z"
        />
        <path
          cx={60}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M62.484 2.049A1.024 1.024 0 0 1 61.46 3.073A1.024 1.024 0 0 1 60.435 2.049A1.024 1.024 0 0 1 62.484 2.049z"
        />
        <path
          cx={60}
          cy={10}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M62.484 10.243A1.024 1.024 0 0 1 61.46 11.268A1.024 1.024 0 0 1 60.435 10.243A1.024 1.024 0 0 1 62.484 10.243z"
        />
        <path
          cx={60}
          cy={18}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M62.484 18.438A1.024 1.024 0 0 1 61.46 19.462A1.024 1.024 0 0 1 60.435 18.438A1.024 1.024 0 0 1 62.484 18.438z"
        />
        <path
          cx={60}
          cy={26}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M62.484 26.633A1.024 1.024 0 0 1 61.46 27.657A1.024 1.024 0 0 1 60.435 26.633A1.024 1.024 0 0 1 62.484 26.633z"
        />
      </pattern>
      <pattern
        id="grid8F"
        x={-4}
        y={-2}
        width={64}
        height={32}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={4}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.122 2.049A1.024 1.024 0 0 1 4.097 3.073A1.024 1.024 0 0 1 3.073 2.049A1.024 1.024 0 0 1 5.122 2.049z"
        />
        <path
          cx={36}
          cy={2}
          r={1}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M37.9 2.049A1.024 1.024 0 0 1 36.876 3.073A1.024 1.024 0 0 1 35.851 2.049A1.024 1.024 0 0 1 37.9 2.049z"
        />
      </pattern>
      <pattern
        id="grid4L"
        x={0}
        y={0}
        width={32}
        height={16}
        patternUnits="userSpaceOnUse"
      >
        <path
          x1={0}
          y1={0}
          x2={32}
          y2={16}
          strokeWidth={0.5121638924455826}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 0L32.778 16.389"
        />
        <path
          x1={0}
          y2={0}
          x2={32}
          y1={16}
          strokeWidth={0.5121638924455826}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 16.389L32.778 0"
        />
      </pattern>
      <pattern
        id="grid4"
        x={-2}
        y={-1}
        width={32}
        height={16}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={2}
          cy={1}
          r={0.5}
          strokeWidth={0.5121638924455826}
          stroke="grey"
          fill="lightgrey"
          d="M2.561 1.024A0.512 0.512 0 0 1 2.049 1.536A0.512 0.512 0 0 1 1.536 1.024A0.512 0.512 0 0 1 2.561 1.024z"
        />
        <path
          cx={2}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M2.561 5.122A0.512 0.512 0 0 1 2.049 5.634A0.512 0.512 0 0 1 1.536 5.122A0.512 0.512 0 0 1 2.561 5.122z"
        />
        <path
          cx={2}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M2.561 9.219A0.512 0.512 0 0 1 2.049 9.731A0.512 0.512 0 0 1 1.536 9.219A0.512 0.512 0 0 1 2.561 9.219z"
        />
        <path
          cx={2}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M2.561 13.316A0.512 0.512 0 0 1 2.049 13.828A0.512 0.512 0 0 1 1.536 13.316A0.512 0.512 0 0 1 2.561 13.316z"
        />
        <path
          cx={6}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M6.658 1.024A0.512 0.512 0 0 1 6.146 1.536A0.512 0.512 0 0 1 5.634 1.024A0.512 0.512 0 0 1 6.658 1.024z"
        />
        <path
          cx={6}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M6.658 5.122A0.512 0.512 0 0 1 6.146 5.634A0.512 0.512 0 0 1 5.634 5.122A0.512 0.512 0 0 1 6.658 5.122z"
        />
        <path
          cx={6}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M6.658 9.219A0.512 0.512 0 0 1 6.146 9.731A0.512 0.512 0 0 1 5.634 9.219A0.512 0.512 0 0 1 6.658 9.219z"
        />
        <path
          cx={6}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M6.658 13.316A0.512 0.512 0 0 1 6.146 13.828A0.512 0.512 0 0 1 5.634 13.316A0.512 0.512 0 0 1 6.658 13.316z"
        />
        <path
          cx={10}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M10.755 1.024A0.512 0.512 0 0 1 10.243 1.536A0.512 0.512 0 0 1 9.731 1.024A0.512 0.512 0 0 1 10.755 1.024z"
        />
        <path
          cx={10}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M10.755 5.122A0.512 0.512 0 0 1 10.243 5.634A0.512 0.512 0 0 1 9.731 5.122A0.512 0.512 0 0 1 10.755 5.122z"
        />
        <path
          cx={10}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M10.755 9.219A0.512 0.512 0 0 1 10.243 9.731A0.512 0.512 0 0 1 9.731 9.219A0.512 0.512 0 0 1 10.755 9.219z"
        />
        <path
          cx={10}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M10.755 13.316A0.512 0.512 0 0 1 10.243 13.828A0.512 0.512 0 0 1 9.731 13.316A0.512 0.512 0 0 1 10.755 13.316z"
        />
        <path
          cx={14}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M14.853 1.024A0.512 0.512 0 0 1 14.341 1.536A0.512 0.512 0 0 1 13.828 1.024A0.512 0.512 0 0 1 14.853 1.024z"
        />
        <path
          cx={14}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M14.853 5.122A0.512 0.512 0 0 1 14.341 5.634A0.512 0.512 0 0 1 13.828 5.122A0.512 0.512 0 0 1 14.853 5.122z"
        />
        <path
          cx={14}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M14.853 9.219A0.512 0.512 0 0 1 14.341 9.731A0.512 0.512 0 0 1 13.828 9.219A0.512 0.512 0 0 1 14.853 9.219z"
        />
        <path
          cx={14}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M14.853 13.316A0.512 0.512 0 0 1 14.341 13.828A0.512 0.512 0 0 1 13.828 13.316A0.512 0.512 0 0 1 14.853 13.316z"
        />
        <path
          cx={18}
          cy={1}
          r={0.5}
          strokeWidth={0.5121638924455826}
          stroke="grey"
          fill="lightgrey"
          d="M18.95 1.024A0.512 0.512 0 0 1 18.438 1.536A0.512 0.512 0 0 1 17.926 1.024A0.512 0.512 0 0 1 18.95 1.024z"
        />
        <path
          cx={18}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M18.95 5.122A0.512 0.512 0 0 1 18.438 5.634A0.512 0.512 0 0 1 17.926 5.122A0.512 0.512 0 0 1 18.95 5.122z"
        />
        <path
          cx={18}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M18.95 9.219A0.512 0.512 0 0 1 18.438 9.731A0.512 0.512 0 0 1 17.926 9.219A0.512 0.512 0 0 1 18.95 9.219z"
        />
        <path
          cx={18}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M18.95 13.316A0.512 0.512 0 0 1 18.438 13.828A0.512 0.512 0 0 1 17.926 13.316A0.512 0.512 0 0 1 18.95 13.316z"
        />
        <path
          cx={22}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M23.047 1.024A0.512 0.512 0 0 1 22.535 1.536A0.512 0.512 0 0 1 22.023 1.024A0.512 0.512 0 0 1 23.047 1.024z"
        />
        <path
          cx={22}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M23.047 5.122A0.512 0.512 0 0 1 22.535 5.634A0.512 0.512 0 0 1 22.023 5.122A0.512 0.512 0 0 1 23.047 5.122z"
        />
        <path
          cx={22}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M23.047 9.219A0.512 0.512 0 0 1 22.535 9.731A0.512 0.512 0 0 1 22.023 9.219A0.512 0.512 0 0 1 23.047 9.219z"
        />
        <path
          cx={22}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M23.047 13.316A0.512 0.512 0 0 1 22.535 13.828A0.512 0.512 0 0 1 22.023 13.316A0.512 0.512 0 0 1 23.047 13.316z"
        />
        <path
          cx={26}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M27.145 1.024A0.512 0.512 0 0 1 26.633 1.536A0.512 0.512 0 0 1 26.12 1.024A0.512 0.512 0 0 1 27.145 1.024z"
        />
        <path
          cx={26}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M27.145 5.122A0.512 0.512 0 0 1 26.633 5.634A0.512 0.512 0 0 1 26.12 5.122A0.512 0.512 0 0 1 27.145 5.122z"
        />
        <path
          cx={26}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M27.145 9.219A0.512 0.512 0 0 1 26.633 9.731A0.512 0.512 0 0 1 26.12 9.219A0.512 0.512 0 0 1 27.145 9.219z"
        />
        <path
          cx={26}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M27.145 13.316A0.512 0.512 0 0 1 26.633 13.828A0.512 0.512 0 0 1 26.12 13.316A0.512 0.512 0 0 1 27.145 13.316z"
        />
        <path
          cx={30}
          cy={1}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M31.242 1.024A0.512 0.512 0 0 1 30.73 1.536A0.512 0.512 0 0 1 30.218 1.024A0.512 0.512 0 0 1 31.242 1.024z"
        />
        <path
          cx={30}
          cy={5}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M31.242 5.122A0.512 0.512 0 0 1 30.73 5.634A0.512 0.512 0 0 1 30.218 5.122A0.512 0.512 0 0 1 31.242 5.122z"
        />
        <path
          cx={30}
          cy={9}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M31.242 9.219A0.512 0.512 0 0 1 30.73 9.731A0.512 0.512 0 0 1 30.218 9.219A0.512 0.512 0 0 1 31.242 9.219z"
        />
        <path
          cx={30}
          cy={13}
          r={0.5}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M31.242 13.316A0.512 0.512 0 0 1 30.73 13.828A0.512 0.512 0 0 1 30.218 13.316A0.512 0.512 0 0 1 31.242 13.316z"
        />
      </pattern>
      <pattern
        id="grid4F"
        x={-2}
        y={-1}
        width={32}
        height={16}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={2}
          cy={1}
          r={0.5}
          strokeWidth={0.5121638924455826}
          stroke="grey"
          fill="lightgrey"
          d="M2.561 1.024A0.512 0.512 0 0 1 2.049 1.536A0.512 0.512 0 0 1 1.536 1.024A0.512 0.512 0 0 1 2.561 1.024z"
        />
        <path
          cx={18}
          cy={1}
          r={0.5}
          strokeWidth={0.5121638924455826}
          stroke="grey"
          fill="lightgrey"
          d="M18.95 1.024A0.512 0.512 0 0 1 18.438 1.536A0.512 0.512 0 0 1 17.926 1.024A0.512 0.512 0 0 1 18.95 1.024z"
        />
      </pattern>
      <pattern
        id="grid2L"
        x={0}
        y={0}
        width={16}
        height={8}
        patternUnits="userSpaceOnUse"
      >
        <path
          x1={0}
          y1={0}
          x2={16}
          y2={8}
          strokeWidth={0.2560819462227913}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 0L16.389 8.195"
        />
        <path
          x1={0}
          y2={0}
          x2={16}
          y1={8}
          strokeWidth={0.2560819462227913}
          stroke="#D3D3D3"
          strokeOpacity={1}
          d="M0 8.195L16.389 0"
        />
      </pattern>
      <pattern
        id="grid2"
        x={-1}
        y={-0.5}
        width={16}
        height={8}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={1}
          cy={0.5}
          r={0.25}
          strokeWidth={0.2560819462227913}
          stroke="grey"
          fill="lightgrey"
          d="M1.28 0.512A0.256 0.256 0 0 1 1.024 0.768A0.256 0.256 0 0 1 0.768 0.512A0.256 0.256 0 0 1 1.28 0.512z"
        />
        <path
          cx={1}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M1.28 2.561A0.256 0.256 0 0 1 1.024 2.817A0.256 0.256 0 0 1 0.768 2.561A0.256 0.256 0 0 1 1.28 2.561z"
        />
        <path
          cx={1}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M1.28 4.609A0.256 0.256 0 0 1 1.024 4.866A0.256 0.256 0 0 1 0.768 4.609A0.256 0.256 0 0 1 1.28 4.609z"
        />
        <path
          cx={1}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M1.28 6.658A0.256 0.256 0 0 1 1.024 6.914A0.256 0.256 0 0 1 0.768 6.658A0.256 0.256 0 0 1 1.28 6.658z"
        />
        <path
          cx={3}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M3.329 0.512A0.256 0.256 0 0 1 3.073 0.768A0.256 0.256 0 0 1 2.817 0.512A0.256 0.256 0 0 1 3.329 0.512z"
        />
        <path
          cx={3}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M3.329 2.561A0.256 0.256 0 0 1 3.073 2.817A0.256 0.256 0 0 1 2.817 2.561A0.256 0.256 0 0 1 3.329 2.561z"
        />
        <path
          cx={3}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M3.329 4.609A0.256 0.256 0 0 1 3.073 4.866A0.256 0.256 0 0 1 2.817 4.609A0.256 0.256 0 0 1 3.329 4.609z"
        />
        <path
          cx={3}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M3.329 6.658A0.256 0.256 0 0 1 3.073 6.914A0.256 0.256 0 0 1 2.817 6.658A0.256 0.256 0 0 1 3.329 6.658z"
        />
        <path
          cx={5}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.378 0.512A0.256 0.256 0 0 1 5.122 0.768A0.256 0.256 0 0 1 4.866 0.512A0.256 0.256 0 0 1 5.378 0.512z"
        />
        <path
          cx={5}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.378 2.561A0.256 0.256 0 0 1 5.122 2.817A0.256 0.256 0 0 1 4.866 2.561A0.256 0.256 0 0 1 5.378 2.561z"
        />
        <path
          cx={5}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.378 4.609A0.256 0.256 0 0 1 5.122 4.866A0.256 0.256 0 0 1 4.866 4.609A0.256 0.256 0 0 1 5.378 4.609z"
        />
        <path
          cx={5}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M5.378 6.658A0.256 0.256 0 0 1 5.122 6.914A0.256 0.256 0 0 1 4.866 6.658A0.256 0.256 0 0 1 5.378 6.658z"
        />
        <path
          cx={7}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M7.426 0.512A0.256 0.256 0 0 1 7.17 0.768A0.256 0.256 0 0 1 6.914 0.512A0.256 0.256 0 0 1 7.426 0.512z"
        />
        <path
          cx={7}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M7.426 2.561A0.256 0.256 0 0 1 7.17 2.817A0.256 0.256 0 0 1 6.914 2.561A0.256 0.256 0 0 1 7.426 2.561z"
        />
        <path
          cx={7}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M7.426 4.609A0.256 0.256 0 0 1 7.17 4.866A0.256 0.256 0 0 1 6.914 4.609A0.256 0.256 0 0 1 7.426 4.609z"
        />
        <path
          cx={7}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M7.426 6.658A0.256 0.256 0 0 1 7.17 6.914A0.256 0.256 0 0 1 6.914 6.658A0.256 0.256 0 0 1 7.426 6.658z"
        />
        <path
          cx={9}
          cy={0.5}
          r={0.25}
          strokeWidth={0.2560819462227913}
          stroke="grey"
          fill="lightgrey"
          d="M9.475 0.512A0.256 0.256 0 0 1 9.219 0.768A0.256 0.256 0 0 1 8.963 0.512A0.256 0.256 0 0 1 9.475 0.512z"
        />
        <path
          cx={9}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M9.475 2.561A0.256 0.256 0 0 1 9.219 2.817A0.256 0.256 0 0 1 8.963 2.561A0.256 0.256 0 0 1 9.475 2.561z"
        />
        <path
          cx={9}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M9.475 4.609A0.256 0.256 0 0 1 9.219 4.866A0.256 0.256 0 0 1 8.963 4.609A0.256 0.256 0 0 1 9.475 4.609z"
        />
        <path
          cx={9}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M9.475 6.658A0.256 0.256 0 0 1 9.219 6.914A0.256 0.256 0 0 1 8.963 6.658A0.256 0.256 0 0 1 9.475 6.658z"
        />
        <path
          cx={11}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M11.524 0.512A0.256 0.256 0 0 1 11.268 0.768A0.256 0.256 0 0 1 11.012 0.512A0.256 0.256 0 0 1 11.524 0.512z"
        />
        <path
          cx={11}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M11.524 2.561A0.256 0.256 0 0 1 11.268 2.817A0.256 0.256 0 0 1 11.012 2.561A0.256 0.256 0 0 1 11.524 2.561z"
        />
        <path
          cx={11}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M11.524 4.609A0.256 0.256 0 0 1 11.268 4.866A0.256 0.256 0 0 1 11.012 4.609A0.256 0.256 0 0 1 11.524 4.609z"
        />
        <path
          cx={11}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M11.524 6.658A0.256 0.256 0 0 1 11.268 6.914A0.256 0.256 0 0 1 11.012 6.658A0.256 0.256 0 0 1 11.524 6.658z"
        />
        <path
          cx={13}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.572 0.512A0.256 0.256 0 0 1 13.316 0.768A0.256 0.256 0 0 1 13.06 0.512A0.256 0.256 0 0 1 13.572 0.512z"
        />
        <path
          cx={13}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.572 2.561A0.256 0.256 0 0 1 13.316 2.817A0.256 0.256 0 0 1 13.06 2.561A0.256 0.256 0 0 1 13.572 2.561z"
        />
        <path
          cx={13}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.572 4.609A0.256 0.256 0 0 1 13.316 4.866A0.256 0.256 0 0 1 13.06 4.609A0.256 0.256 0 0 1 13.572 4.609z"
        />
        <path
          cx={13}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M13.572 6.658A0.256 0.256 0 0 1 13.316 6.914A0.256 0.256 0 0 1 13.06 6.658A0.256 0.256 0 0 1 13.572 6.658z"
        />
        <path
          cx={15}
          cy={0.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M15.621 0.512A0.256 0.256 0 0 1 15.365 0.768A0.256 0.256 0 0 1 15.109 0.512A0.256 0.256 0 0 1 15.621 0.512z"
        />
        <path
          cx={15}
          cy={2.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M15.621 2.561A0.256 0.256 0 0 1 15.365 2.817A0.256 0.256 0 0 1 15.109 2.561A0.256 0.256 0 0 1 15.621 2.561z"
        />
        <path
          cx={15}
          cy={4.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M15.621 4.609A0.256 0.256 0 0 1 15.365 4.866A0.256 0.256 0 0 1 15.109 4.609A0.256 0.256 0 0 1 15.621 4.609z"
        />
        <path
          cx={15}
          cy={6.5}
          r={0.25}
          strokeWidth={1.0243277848911652}
          stroke="grey"
          fill="lightgrey"
          d="M15.621 6.658A0.256 0.256 0 0 1 15.365 6.914A0.256 0.256 0 0 1 15.109 6.658A0.256 0.256 0 0 1 15.621 6.658z"
        />
      </pattern>
      <pattern
        id="grid2F"
        x={-1}
        y={-0.5}
        width={16}
        height={8}
        patternUnits="userSpaceOnUse"
      >
        <path
          cx={1}
          cy={0.5}
          r={0.25}
          strokeWidth={0.2560819462227913}
          stroke="grey"
          fill="lightgrey"
          d="M1.28 0.512A0.256 0.256 0 0 1 1.024 0.768A0.256 0.256 0 0 1 0.768 0.512A0.256 0.256 0 0 1 1.28 0.512z"
        />
        <path
          cx={9}
          cy={0.5}
          r={0.25}
          strokeWidth={0.2560819462227913}
          stroke="grey"
          fill="lightgrey"
          d="M9.475 0.512A0.256 0.256 0 0 1 9.219 0.768A0.256 0.256 0 0 1 8.963 0.512A0.256 0.256 0 0 1 9.475 0.512z"
        />
      </pattern>
    </defs>
    <defs id="icograms-svg-defs" />
    <g
      id="chart-top-container"
      transform="matrix(.51355 0 0 .51355 251.033 144.909) " width="100%" 
    >
      <g id="chart-background-container" className=" bg-white dark:bg-gray-900" >
        <g id="chart-transparent">
          <path
            width={960}
            height={640}
            // fill="rgb(255, 255, 255)"
            d="M0 0H983.355V655.57H0V0z"
          />
          <path
            x={0}
            y={0}
            width={960}
            height={640}
            fill="url(#transparent-background)"
            d="M0 0H983.355V655.57H0V0z"
          />
        </g>
        <path
          id="chart-background-color"
          width={960}
          height={640}
          fill="#111827"
          stroke="none"
          fillOpacity={1}
          d="M0 0H983.355V655.57H0V0z"
          strokeWidth={1.0243277848911652}
        />
      </g>
      <g id="chart-container">
        <g id="i9" className="lvl-1" transform="translate(512 160)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i10" className="lvl-1" transform="translate(576 192)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i11" className="lvl-1" transform="translate(640 224)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i12" className="lvl-1" transform="translate(704 256)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i13" className="lvl-1" transform="matrix(2 0 0 2 448 224)">
          <g>
            <g fill="#9c3">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i14" className="lvl-1" transform="matrix(2 0 0 2 320 288)">
          <g>
            <g fill="#9c3">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i15" className="lvl-1" transform="matrix(2 0 0 2 192 352)">
          <g>
            <g fill="#9c3">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i16" className="lvl-1" transform="translate(576 128)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i17" className="lvl-1" transform="translate(64 384)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i18" className="lvl-1" transform="translate(640 160)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i19" className="lvl-1" transform="translate(128 416)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i20" className="lvl-1" transform="translate(704 192)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i21" className="lvl-1" transform="translate(192 448)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i22" className="lvl-1" transform="translate(768 224)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i23" className="lvl-1" transform="translate(256 480)">
          <g>
            <g fill="#656565">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i24" className="lvl-1" transform="matrix(-1 0 0 1 752 104)">
          <g>
            <path
              fill="#2D3134"
              points="5,27 5,23.5 7,22.5 7,26 "
              d="M5.122 27.657L5.122 24.072L7.17 23.047L7.17 26.633Z"
            />
            <path
              opacity={0.3}
              points="3,28.4 16.1,20.9 64,45 50,52 "
              d="M3.073 29.091L16.492 21.408L65.557 46.095L51.216 53.265Z"
            />
            <g>
              <path
                fill="#2D3134"
                d="M46.607 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M47.119 50.602c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M47.324 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M45.275 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.205 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                opacity={0.06}
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                fill="#2D3134"
                d="M45.992 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M47.939 48.963c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M9.117 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0.102 -1.639 -1.229 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M9.731 31.754c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0.102 0.717 -0.307 1.332 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M9.834 29.808c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024c1.229 0.615 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M7.887 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.102 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                opacity={0.06}
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                fill="#2D3134"
                d="M8.604 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M10.653 30.218c0 1.536 -1.332 2.254 -2.868 1.434 -1.536 -0.819 -2.868 -2.766 -2.868 -4.302s1.332 -2.254 2.868 -1.434c1.536 0.819 2.868 2.663 2.868 4.302z"
              />
            </g>
            <path
              fill="#E5E5E5"
              d="m5.122 12.292 14.341 -7.17 6.146 3.073v14.443l-14.238 6.863c-0.205 -0.717 -0.615 -1.434 -1.127 -2.151 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.06}
              points="25,8 25,22.1 11,28.8 11,15 "
              d="M25.608 8.195L25.608 22.638L11.268 29.501L11.268 15.365Z"
            />
            <path
              fill="#2D3134"
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              opacity={0.39}
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              fill="#06547A"
              points="26,5 12,12 12,27.3 50,46.3 64,39.3 64,24.1 "
              d="M26.633 5.122L12.292 12.292L12.292 27.964L51.216 47.426L65.557 40.256L65.557 24.686Z"
            />
            <path
              fill="#2D3134"
              points="64,38.1 64,40.1 50,47.1 50,45.1 "
              d="M65.557 39.027L65.557 41.076L51.216 48.246L51.216 46.197Z"
            />
            <path
              fill="#2D3134"
              points="12,26 12,28 50,47.1 50,45.1 "
              d="M12.292 26.633L12.292 28.681L51.216 48.246L51.216 46.197Z"
            />
            <path
              opacity={0.5}
              fill="#2D3134"
              points="8.5,19.8 8.5,20.3 9.5,20.8 9.5,20.3 "
              d="M8.707 20.282L8.707 20.794L9.731 21.306L9.731 20.794Z"
            />
            <path
              opacity={0.5}
              fill="#FFFFFF"
              points="9.5,21 8.5,20.5 8.5,20.3 9.5,20.8 "
              d="M9.731 21.511L8.707 20.999L8.707 20.794L9.731 21.306Z"
            />
            <path
              fill="#3399CC"
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l3.79 1.946c0.102 0.102 0.205 0.205 0.205 0.307v3.892c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              opacity={0.15}
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l-1.536 4.712c0 0.102 0 0.307 0.102 0.41l0.717 0.307h0.205l1.946 -0.307c0.41 -0.102 0.717 0 1.024 0.102l1.536 0.819v0.102c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              fill="#CC291F"
              points="63.5,38.8 63.5,39.8 62.5,40.3 62.5,39.3 "
              d="M65.045 39.744L65.045 40.768L64.02 41.28L64.02 40.256Z"
            />
            <path
              fill="#CC291F"
              points="62,39.6 62,40.6 61,41.1 61,40.1 "
              d="M63.508 40.563L63.508 41.588L62.484 42.1L62.484 41.076Z"
            />
            <path
              fill="#CC291F"
              points="53,44.1 53,45.1 52,45.6 52,44.6 "
              d="M54.289 45.173L54.289 46.197L53.265 46.709L53.265 45.685Z"
            />
            <path
              fill="#CC291F"
              points="51.5,44.8 51.5,45.8 50.5,46.3 50.5,45.3 "
              d="M52.753 45.89L52.753 46.914L51.729 47.426L51.729 46.402Z"
            />
            <path
              opacity={0.15}
              d="M52.241 32.471v13.214l12.292 -6.146V26.325l-12.292 6.146zm11.78 6.761 -5.429 2.663V29.808l5.429 -2.663v12.087zm-11.268 -6.453 5.429 -2.663v12.087l-5.429 2.663V32.778z"
            />
            <path
              fill="#FFFFFF"
              points="59.5,40.3 59.5,41.6 54.5,44.1 54.5,42.8 "
              d="M60.948 41.28L60.948 42.612L55.826 45.173L55.826 43.841Z"
            />
            <path
              fill="#2D3134"
              points="63.3,37.1 63.3,37.6 62.3,38.1 62.3,37.6 "
              d="M64.84 38.003L64.84 38.515L63.816 39.027L63.816 38.515Z"
            />
            <path
              fill="#2D3134"
              points="51.8,42.8 51.8,43.3 50.8,43.8 50.8,43.3 "
              d="M53.06 43.841L53.06 44.353L52.036 44.866L52.036 44.353Z"
            />
            <path
              fill="#2D3134"
              points="63.3,26.6 63.3,27.1 62.3,27.6 62.3,27.1 "
              d="M64.84 27.247L64.84 27.759L63.816 28.271L63.816 27.759Z"
            />
            <path
              fill="#2D3134"
              points="51.8,32.3 51.8,32.8 50.8,33.3 50.8,32.8 "
              d="M53.06 33.086L53.06 33.598L52.036 34.11L52.036 33.598Z"
            />
            <path
              opacity={0.39}
              d="m5.122 12.292 6.146 3.073v13.828c-0.205 -0.615 -0.615 -1.332 -1.024 -1.946 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.39}
              points="12,12 12,28 50,47.1 50,31.1 "
              d="M12.292 12.292L12.292 28.681L51.216 48.246L51.216 31.857Z"
            />
            <path
              opacity={0.06}
              points="64,24.1 64,40.1 50,47.1 50,31.1 "
              d="M65.557 24.686L65.557 41.076L51.216 48.246L51.216 31.857Z"
            />
            <g>
              <path
                fill="#FFCC00"
                points="57.4,28.5 51,31.7 51,37.9 57.2,41 63,38.1 63,31.3  "
                d="M58.796 29.193L52.241 32.471L52.241 38.822L58.592 41.997L64.533 39.027L64.533 32.061Z"
              />
              <path
                opacity={0.29}
                points="51,31.9 51,37.9 57.2,41 57.2,35  "
                d="M52.241 32.676L52.241 38.822L58.592 41.997L58.592 35.851Z"
              />
              <path
                opacity={0.3}
                points="59.6,33.8 59.6,36.7 61.4,35.8 61.4,32.9 55,29.7 53.2,30.6  "
                d="M61.05 34.622L61.05 37.593L62.894 36.671L62.894 33.7L56.338 30.423L54.494 31.344Z"
              />
              <path
                opacity={0.11}
                points="57.2,35 57.2,41 63,38.1 63,32.1  "
                d="M58.592 35.851L58.592 41.997L64.533 39.027L64.533 32.881Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,32.3 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 33.086L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
              <path
                opacity={0.3}
                points="51,36.5 52.6,37.3 52.6,40.2 54.4,39.3 54.4,36.4 51,34.7  "
                d="M52.241 37.388L53.88 38.207L53.88 41.178L55.723 40.256L55.723 37.286L52.241 35.544Z"
              />
              <path
                opacity={0.11}
                points="51,38.1 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 39.027L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="57.2,34.6 63,31.7 63,25.7 51.2,31.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L52.446 32.369Z"
              />
              <path
                opacity={0.29}
                points="57.2,34.6 57.2,28.6 51.2,31.6  "
                d="M58.592 35.442L58.592 29.296L52.446 32.369Z"
              />
              <path
                opacity={0.3}
                points="59.6,27.4 59.6,30.3 61.4,29.4 61.4,26.5  "
                d="M61.05 28.067L61.05 31.037L62.894 30.115L62.894 27.145Z"
              />
              <path
                opacity={0.11}
                points="57.2,34.6 63,31.7 63,25.7 57.2,28.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L58.592 29.296Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
              <path
                opacity={0.3}
                points="52.6,30.9 52.6,33.8 54.4,32.9 54.4,30  "
                d="M53.88 31.652L53.88 34.622L55.723 33.7L55.723 30.73Z"
              />
              <path
                opacity={0.11}
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
            </g>
            <path
              fill="#06547A"
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <path
              opacity={0.06}
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <g>
              <path
                fill="#06547A"
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
              <path
                opacity={0.06}
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
            </g>
          </g>
        </g>
        <g id="i25" className="lvl-1" transform="matrix(-1 0 0 1 800 128)">
          <g>
            <path
              fill="#2D3134"
              points="5,27 5,23.5 7,22.5 7,26 "
              d="M5.122 27.657L5.122 24.072L7.17 23.047L7.17 26.633Z"
            />
            <path
              opacity={0.3}
              points="3,28.4 16.1,20.9 64,45 50,52 "
              d="M3.073 29.091L16.492 21.408L65.557 46.095L51.216 53.265Z"
            />
            <g>
              <path
                fill="#2D3134"
                d="M46.607 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M47.119 50.602c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M47.324 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M45.275 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.205 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                opacity={0.06}
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                fill="#2D3134"
                d="M45.992 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M47.939 48.963c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M9.117 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0.102 -1.639 -1.229 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M9.731 31.754c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0.102 0.717 -0.307 1.332 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M9.834 29.808c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024c1.229 0.615 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M7.887 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.102 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                opacity={0.06}
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                fill="#2D3134"
                d="M8.604 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M10.653 30.218c0 1.536 -1.332 2.254 -2.868 1.434 -1.536 -0.819 -2.868 -2.766 -2.868 -4.302s1.332 -2.254 2.868 -1.434c1.536 0.819 2.868 2.663 2.868 4.302z"
              />
            </g>
            <path
              fill="#E5E5E5"
              d="m5.122 12.292 14.341 -7.17 6.146 3.073v14.443l-14.238 6.863c-0.205 -0.717 -0.615 -1.434 -1.127 -2.151 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.06}
              points="25,8 25,22.1 11,28.8 11,15 "
              d="M25.608 8.195L25.608 22.638L11.268 29.501L11.268 15.365Z"
            />
            <path
              fill="#2D3134"
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              opacity={0.39}
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              fill="#06547A"
              points="26,5 12,12 12,27.3 50,46.3 64,39.3 64,24.1 "
              d="M26.633 5.122L12.292 12.292L12.292 27.964L51.216 47.426L65.557 40.256L65.557 24.686Z"
            />
            <path
              fill="#2D3134"
              points="64,38.1 64,40.1 50,47.1 50,45.1 "
              d="M65.557 39.027L65.557 41.076L51.216 48.246L51.216 46.197Z"
            />
            <path
              fill="#2D3134"
              points="12,26 12,28 50,47.1 50,45.1 "
              d="M12.292 26.633L12.292 28.681L51.216 48.246L51.216 46.197Z"
            />
            <path
              opacity={0.5}
              fill="#2D3134"
              points="8.5,19.8 8.5,20.3 9.5,20.8 9.5,20.3 "
              d="M8.707 20.282L8.707 20.794L9.731 21.306L9.731 20.794Z"
            />
            <path
              opacity={0.5}
              fill="#FFFFFF"
              points="9.5,21 8.5,20.5 8.5,20.3 9.5,20.8 "
              d="M9.731 21.511L8.707 20.999L8.707 20.794L9.731 21.306Z"
            />
            <path
              fill="#3399CC"
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l3.79 1.946c0.102 0.102 0.205 0.205 0.205 0.307v3.892c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              opacity={0.15}
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l-1.536 4.712c0 0.102 0 0.307 0.102 0.41l0.717 0.307h0.205l1.946 -0.307c0.41 -0.102 0.717 0 1.024 0.102l1.536 0.819v0.102c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              fill="#CC291F"
              points="63.5,38.8 63.5,39.8 62.5,40.3 62.5,39.3 "
              d="M65.045 39.744L65.045 40.768L64.02 41.28L64.02 40.256Z"
            />
            <path
              fill="#CC291F"
              points="62,39.6 62,40.6 61,41.1 61,40.1 "
              d="M63.508 40.563L63.508 41.588L62.484 42.1L62.484 41.076Z"
            />
            <path
              fill="#CC291F"
              points="53,44.1 53,45.1 52,45.6 52,44.6 "
              d="M54.289 45.173L54.289 46.197L53.265 46.709L53.265 45.685Z"
            />
            <path
              fill="#CC291F"
              points="51.5,44.8 51.5,45.8 50.5,46.3 50.5,45.3 "
              d="M52.753 45.89L52.753 46.914L51.729 47.426L51.729 46.402Z"
            />
            <path
              opacity={0.15}
              d="M52.241 32.471v13.214l12.292 -6.146V26.325l-12.292 6.146zm11.78 6.761 -5.429 2.663V29.808l5.429 -2.663v12.087zm-11.268 -6.453 5.429 -2.663v12.087l-5.429 2.663V32.778z"
            />
            <path
              fill="#FFFFFF"
              points="59.5,40.3 59.5,41.6 54.5,44.1 54.5,42.8 "
              d="M60.948 41.28L60.948 42.612L55.826 45.173L55.826 43.841Z"
            />
            <path
              fill="#2D3134"
              points="63.3,37.1 63.3,37.6 62.3,38.1 62.3,37.6 "
              d="M64.84 38.003L64.84 38.515L63.816 39.027L63.816 38.515Z"
            />
            <path
              fill="#2D3134"
              points="51.8,42.8 51.8,43.3 50.8,43.8 50.8,43.3 "
              d="M53.06 43.841L53.06 44.353L52.036 44.866L52.036 44.353Z"
            />
            <path
              fill="#2D3134"
              points="63.3,26.6 63.3,27.1 62.3,27.6 62.3,27.1 "
              d="M64.84 27.247L64.84 27.759L63.816 28.271L63.816 27.759Z"
            />
            <path
              fill="#2D3134"
              points="51.8,32.3 51.8,32.8 50.8,33.3 50.8,32.8 "
              d="M53.06 33.086L53.06 33.598L52.036 34.11L52.036 33.598Z"
            />
            <path
              opacity={0.39}
              d="m5.122 12.292 6.146 3.073v13.828c-0.205 -0.615 -0.615 -1.332 -1.024 -1.946 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.39}
              points="12,12 12,28 50,47.1 50,31.1 "
              d="M12.292 12.292L12.292 28.681L51.216 48.246L51.216 31.857Z"
            />
            <path
              opacity={0.06}
              points="64,24.1 64,40.1 50,47.1 50,31.1 "
              d="M65.557 24.686L65.557 41.076L51.216 48.246L51.216 31.857Z"
            />
            <g>
              <path
                fill="#FFCC00"
                points="57.4,28.5 51,31.7 51,37.9 57.2,41 63,38.1 63,31.3  "
                d="M58.796 29.193L52.241 32.471L52.241 38.822L58.592 41.997L64.533 39.027L64.533 32.061Z"
              />
              <path
                opacity={0.29}
                points="51,31.9 51,37.9 57.2,41 57.2,35  "
                d="M52.241 32.676L52.241 38.822L58.592 41.997L58.592 35.851Z"
              />
              <path
                opacity={0.3}
                points="59.6,33.8 59.6,36.7 61.4,35.8 61.4,32.9 55,29.7 53.2,30.6  "
                d="M61.05 34.622L61.05 37.593L62.894 36.671L62.894 33.7L56.338 30.423L54.494 31.344Z"
              />
              <path
                opacity={0.11}
                points="57.2,35 57.2,41 63,38.1 63,32.1  "
                d="M58.592 35.851L58.592 41.997L64.533 39.027L64.533 32.881Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,32.3 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 33.086L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
              <path
                opacity={0.3}
                points="51,36.5 52.6,37.3 52.6,40.2 54.4,39.3 54.4,36.4 51,34.7  "
                d="M52.241 37.388L53.88 38.207L53.88 41.178L55.723 40.256L55.723 37.286L52.241 35.544Z"
              />
              <path
                opacity={0.11}
                points="51,38.1 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 39.027L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="57.2,34.6 63,31.7 63,25.7 51.2,31.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L52.446 32.369Z"
              />
              <path
                opacity={0.29}
                points="57.2,34.6 57.2,28.6 51.2,31.6  "
                d="M58.592 35.442L58.592 29.296L52.446 32.369Z"
              />
              <path
                opacity={0.3}
                points="59.6,27.4 59.6,30.3 61.4,29.4 61.4,26.5  "
                d="M61.05 28.067L61.05 31.037L62.894 30.115L62.894 27.145Z"
              />
              <path
                opacity={0.11}
                points="57.2,34.6 63,31.7 63,25.7 57.2,28.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L58.592 29.296Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
              <path
                opacity={0.3}
                points="52.6,30.9 52.6,33.8 54.4,32.9 54.4,30  "
                d="M53.88 31.652L53.88 34.622L55.723 33.7L55.723 30.73Z"
              />
              <path
                opacity={0.11}
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
            </g>
            <path
              fill="#06547A"
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <path
              opacity={0.06}
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <g>
              <path
                fill="#06547A"
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
              <path
                opacity={0.06}
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
            </g>
          </g>
        </g>
        <g id="i26" className="lvl-1" transform="matrix(-1 0 0 1 848 152)">
          <g>
            <path
              fill="#2D3134"
              points="5,27 5,23.5 7,22.5 7,26 "
              d="M5.122 27.657L5.122 24.072L7.17 23.047L7.17 26.633Z"
            />
            <path
              opacity={0.3}
              points="3,28.4 16.1,20.9 64,45 50,52 "
              d="M3.073 29.091L16.492 21.408L65.557 46.095L51.216 53.265Z"
            />
            <g>
              <path
                fill="#2D3134"
                d="M46.607 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M47.119 50.602c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M47.324 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M45.275 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.205 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                opacity={0.06}
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                fill="#2D3134"
                d="M45.992 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M47.939 48.963c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M9.117 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0.102 -1.639 -1.229 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M9.731 31.754c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0.102 0.717 -0.307 1.332 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M9.834 29.808c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024c1.229 0.615 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M7.887 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.102 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                opacity={0.06}
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                fill="#2D3134"
                d="M8.604 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M10.653 30.218c0 1.536 -1.332 2.254 -2.868 1.434 -1.536 -0.819 -2.868 -2.766 -2.868 -4.302s1.332 -2.254 2.868 -1.434c1.536 0.819 2.868 2.663 2.868 4.302z"
              />
            </g>
            <path
              fill="#E5E5E5"
              d="m5.122 12.292 14.341 -7.17 6.146 3.073v14.443l-14.238 6.863c-0.205 -0.717 -0.615 -1.434 -1.127 -2.151 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.06}
              points="25,8 25,22.1 11,28.8 11,15 "
              d="M25.608 8.195L25.608 22.638L11.268 29.501L11.268 15.365Z"
            />
            <path
              fill="#2D3134"
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              opacity={0.39}
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              fill="#06547A"
              points="26,5 12,12 12,27.3 50,46.3 64,39.3 64,24.1 "
              d="M26.633 5.122L12.292 12.292L12.292 27.964L51.216 47.426L65.557 40.256L65.557 24.686Z"
            />
            <path
              fill="#2D3134"
              points="64,38.1 64,40.1 50,47.1 50,45.1 "
              d="M65.557 39.027L65.557 41.076L51.216 48.246L51.216 46.197Z"
            />
            <path
              fill="#2D3134"
              points="12,26 12,28 50,47.1 50,45.1 "
              d="M12.292 26.633L12.292 28.681L51.216 48.246L51.216 46.197Z"
            />
            <path
              opacity={0.5}
              fill="#2D3134"
              points="8.5,19.8 8.5,20.3 9.5,20.8 9.5,20.3 "
              d="M8.707 20.282L8.707 20.794L9.731 21.306L9.731 20.794Z"
            />
            <path
              opacity={0.5}
              fill="#FFFFFF"
              points="9.5,21 8.5,20.5 8.5,20.3 9.5,20.8 "
              d="M9.731 21.511L8.707 20.999L8.707 20.794L9.731 21.306Z"
            />
            <path
              fill="#3399CC"
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l3.79 1.946c0.102 0.102 0.205 0.205 0.205 0.307v3.892c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              opacity={0.15}
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l-1.536 4.712c0 0.102 0 0.307 0.102 0.41l0.717 0.307h0.205l1.946 -0.307c0.41 -0.102 0.717 0 1.024 0.102l1.536 0.819v0.102c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              fill="#CC291F"
              points="63.5,38.8 63.5,39.8 62.5,40.3 62.5,39.3 "
              d="M65.045 39.744L65.045 40.768L64.02 41.28L64.02 40.256Z"
            />
            <path
              fill="#CC291F"
              points="62,39.6 62,40.6 61,41.1 61,40.1 "
              d="M63.508 40.563L63.508 41.588L62.484 42.1L62.484 41.076Z"
            />
            <path
              fill="#CC291F"
              points="53,44.1 53,45.1 52,45.6 52,44.6 "
              d="M54.289 45.173L54.289 46.197L53.265 46.709L53.265 45.685Z"
            />
            <path
              fill="#CC291F"
              points="51.5,44.8 51.5,45.8 50.5,46.3 50.5,45.3 "
              d="M52.753 45.89L52.753 46.914L51.729 47.426L51.729 46.402Z"
            />
            <path
              opacity={0.15}
              d="M52.241 32.471v13.214l12.292 -6.146V26.325l-12.292 6.146zm11.78 6.761 -5.429 2.663V29.808l5.429 -2.663v12.087zm-11.268 -6.453 5.429 -2.663v12.087l-5.429 2.663V32.778z"
            />
            <path
              fill="#FFFFFF"
              points="59.5,40.3 59.5,41.6 54.5,44.1 54.5,42.8 "
              d="M60.948 41.28L60.948 42.612L55.826 45.173L55.826 43.841Z"
            />
            <path
              fill="#2D3134"
              points="63.3,37.1 63.3,37.6 62.3,38.1 62.3,37.6 "
              d="M64.84 38.003L64.84 38.515L63.816 39.027L63.816 38.515Z"
            />
            <path
              fill="#2D3134"
              points="51.8,42.8 51.8,43.3 50.8,43.8 50.8,43.3 "
              d="M53.06 43.841L53.06 44.353L52.036 44.866L52.036 44.353Z"
            />
            <path
              fill="#2D3134"
              points="63.3,26.6 63.3,27.1 62.3,27.6 62.3,27.1 "
              d="M64.84 27.247L64.84 27.759L63.816 28.271L63.816 27.759Z"
            />
            <path
              fill="#2D3134"
              points="51.8,32.3 51.8,32.8 50.8,33.3 50.8,32.8 "
              d="M53.06 33.086L53.06 33.598L52.036 34.11L52.036 33.598Z"
            />
            <path
              opacity={0.39}
              d="m5.122 12.292 6.146 3.073v13.828c-0.205 -0.615 -0.615 -1.332 -1.024 -1.946 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.39}
              points="12,12 12,28 50,47.1 50,31.1 "
              d="M12.292 12.292L12.292 28.681L51.216 48.246L51.216 31.857Z"
            />
            <path
              opacity={0.06}
              points="64,24.1 64,40.1 50,47.1 50,31.1 "
              d="M65.557 24.686L65.557 41.076L51.216 48.246L51.216 31.857Z"
            />
            <g>
              <path
                fill="#FFCC00"
                points="57.4,28.5 51,31.7 51,37.9 57.2,41 63,38.1 63,31.3  "
                d="M58.796 29.193L52.241 32.471L52.241 38.822L58.592 41.997L64.533 39.027L64.533 32.061Z"
              />
              <path
                opacity={0.29}
                points="51,31.9 51,37.9 57.2,41 57.2,35  "
                d="M52.241 32.676L52.241 38.822L58.592 41.997L58.592 35.851Z"
              />
              <path
                opacity={0.3}
                points="59.6,33.8 59.6,36.7 61.4,35.8 61.4,32.9 55,29.7 53.2,30.6  "
                d="M61.05 34.622L61.05 37.593L62.894 36.671L62.894 33.7L56.338 30.423L54.494 31.344Z"
              />
              <path
                opacity={0.11}
                points="57.2,35 57.2,41 63,38.1 63,32.1  "
                d="M58.592 35.851L58.592 41.997L64.533 39.027L64.533 32.881Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,32.3 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 33.086L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
              <path
                opacity={0.3}
                points="51,36.5 52.6,37.3 52.6,40.2 54.4,39.3 54.4,36.4 51,34.7  "
                d="M52.241 37.388L53.88 38.207L53.88 41.178L55.723 40.256L55.723 37.286L52.241 35.544Z"
              />
              <path
                opacity={0.11}
                points="51,38.1 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 39.027L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="57.2,34.6 63,31.7 63,25.7 51.2,31.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L52.446 32.369Z"
              />
              <path
                opacity={0.29}
                points="57.2,34.6 57.2,28.6 51.2,31.6  "
                d="M58.592 35.442L58.592 29.296L52.446 32.369Z"
              />
              <path
                opacity={0.3}
                points="59.6,27.4 59.6,30.3 61.4,29.4 61.4,26.5  "
                d="M61.05 28.067L61.05 31.037L62.894 30.115L62.894 27.145Z"
              />
              <path
                opacity={0.11}
                points="57.2,34.6 63,31.7 63,25.7 57.2,28.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L58.592 29.296Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
              <path
                opacity={0.3}
                points="52.6,30.9 52.6,33.8 54.4,32.9 54.4,30  "
                d="M53.88 31.652L53.88 34.622L55.723 33.7L55.723 30.73Z"
              />
              <path
                opacity={0.11}
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
            </g>
            <path
              fill="#06547A"
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <path
              opacity={0.06}
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <g>
              <path
                fill="#06547A"
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
              <path
                opacity={0.06}
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
            </g>
          </g>
        </g>
        <g id="i27" className="lvl-1" transform="matrix(-1 0 0 1 896 176)">
          <g>
            <path
              fill="#2D3134"
              points="5,27 5,23.5 7,22.5 7,26 "
              d="M5.122 27.657L5.122 24.072L7.17 23.047L7.17 26.633Z"
            />
            <path
              opacity={0.3}
              points="3,28.4 16.1,20.9 64,45 50,52 "
              d="M3.073 29.091L16.492 21.408L65.557 46.095L51.216 53.265Z"
            />
            <g>
              <path
                fill="#2D3134"
                d="M46.607 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M47.119 50.602c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M47.324 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M45.275 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.205 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                opacity={0.06}
                d="M46.197 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.922 0.922 1.332z"
              />
              <path
                fill="#2D3134"
                d="M45.992 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.307 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M47.939 48.963c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M9.117 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0.102 -1.639 -1.229 -3.483 -2.868 -4.302z"
              />
              <path
                opacity={0.06}
                d="M9.731 31.754c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0.102 0.717 -0.307 1.332 -0.819 1.536z"
              />
              <path
                fill="#999999"
                d="M9.834 29.808c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024c1.229 0.615 2.151 2.151 2.151 3.278z"
              />
              <path
                fill="#808285"
                d="M7.887 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.307 0.205 -0.819 0.102 -1.332 -0.102z"
              />
              <path
                fill="#2D3134"
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                opacity={0.06}
                d="M8.809 29.091c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.229 0.41 -0.717 0.922 -0.41 0.922 0.717 0.922 1.229z"
              />
              <path
                fill="#2D3134"
                d="M8.604 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.819 0.922 1.332z"
              />
              <path
                opacity={0.39}
                d="M10.653 30.218c0 1.536 -1.332 2.254 -2.868 1.434 -1.536 -0.819 -2.868 -2.766 -2.868 -4.302s1.332 -2.254 2.868 -1.434c1.536 0.819 2.868 2.663 2.868 4.302z"
              />
            </g>
            <path
              fill="#E5E5E5"
              d="m5.122 12.292 14.341 -7.17 6.146 3.073v14.443l-14.238 6.863c-0.205 -0.717 -0.615 -1.434 -1.127 -2.151 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.06}
              points="25,8 25,22.1 11,28.8 11,15 "
              d="M25.608 8.195L25.608 22.638L11.268 29.501L11.268 15.365Z"
            />
            <path
              fill="#2D3134"
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              opacity={0.39}
              points="46.5,45.1 46.5,48.8 49,47.6 49,43.8 "
              d="M47.631 46.197L47.631 49.987L50.192 48.758L50.192 44.866Z"
            />
            <path
              fill="#06547A"
              points="26,5 12,12 12,27.3 50,46.3 64,39.3 64,24.1 "
              d="M26.633 5.122L12.292 12.292L12.292 27.964L51.216 47.426L65.557 40.256L65.557 24.686Z"
            />
            <path
              fill="#2D3134"
              points="64,38.1 64,40.1 50,47.1 50,45.1 "
              d="M65.557 39.027L65.557 41.076L51.216 48.246L51.216 46.197Z"
            />
            <path
              fill="#2D3134"
              points="12,26 12,28 50,47.1 50,45.1 "
              d="M12.292 26.633L12.292 28.681L51.216 48.246L51.216 46.197Z"
            />
            <path
              opacity={0.5}
              fill="#2D3134"
              points="8.5,19.8 8.5,20.3 9.5,20.8 9.5,20.3 "
              d="M8.707 20.282L8.707 20.794L9.731 21.306L9.731 20.794Z"
            />
            <path
              opacity={0.5}
              fill="#FFFFFF"
              points="9.5,21 8.5,20.5 8.5,20.3 9.5,20.8 "
              d="M9.731 21.511L8.707 20.999L8.707 20.794L9.731 21.306Z"
            />
            <path
              fill="#3399CC"
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l3.79 1.946c0.102 0.102 0.205 0.205 0.205 0.307v3.892c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              opacity={0.15}
              d="M3.688 18.233 5.327 13.316c0.102 -0.205 0.307 -0.307 0.41 -0.205l-1.536 4.712c0 0.102 0 0.307 0.102 0.41l0.717 0.307h0.205l1.946 -0.307c0.41 -0.102 0.717 0 1.024 0.102l1.536 0.819v0.102c0 0.205 -0.205 0.41 -0.41 0.307l-1.639 -0.819c-0.307 -0.205 -0.717 -0.205 -1.024 -0.102l-1.946 0.41h-0.205l-0.717 -0.307c-0.102 -0.205 -0.102 -0.41 -0.102 -0.512z"
            />
            <path
              fill="#CC291F"
              points="63.5,38.8 63.5,39.8 62.5,40.3 62.5,39.3 "
              d="M65.045 39.744L65.045 40.768L64.02 41.28L64.02 40.256Z"
            />
            <path
              fill="#CC291F"
              points="62,39.6 62,40.6 61,41.1 61,40.1 "
              d="M63.508 40.563L63.508 41.588L62.484 42.1L62.484 41.076Z"
            />
            <path
              fill="#CC291F"
              points="53,44.1 53,45.1 52,45.6 52,44.6 "
              d="M54.289 45.173L54.289 46.197L53.265 46.709L53.265 45.685Z"
            />
            <path
              fill="#CC291F"
              points="51.5,44.8 51.5,45.8 50.5,46.3 50.5,45.3 "
              d="M52.753 45.89L52.753 46.914L51.729 47.426L51.729 46.402Z"
            />
            <path
              opacity={0.15}
              d="M52.241 32.471v13.214l12.292 -6.146V26.325l-12.292 6.146zm11.78 6.761 -5.429 2.663V29.808l5.429 -2.663v12.087zm-11.268 -6.453 5.429 -2.663v12.087l-5.429 2.663V32.778z"
            />
            <path
              fill="#FFFFFF"
              points="59.5,40.3 59.5,41.6 54.5,44.1 54.5,42.8 "
              d="M60.948 41.28L60.948 42.612L55.826 45.173L55.826 43.841Z"
            />
            <path
              fill="#2D3134"
              points="63.3,37.1 63.3,37.6 62.3,38.1 62.3,37.6 "
              d="M64.84 38.003L64.84 38.515L63.816 39.027L63.816 38.515Z"
            />
            <path
              fill="#2D3134"
              points="51.8,42.8 51.8,43.3 50.8,43.8 50.8,43.3 "
              d="M53.06 43.841L53.06 44.353L52.036 44.866L52.036 44.353Z"
            />
            <path
              fill="#2D3134"
              points="63.3,26.6 63.3,27.1 62.3,27.6 62.3,27.1 "
              d="M64.84 27.247L64.84 27.759L63.816 28.271L63.816 27.759Z"
            />
            <path
              fill="#2D3134"
              points="51.8,32.3 51.8,32.8 50.8,33.3 50.8,32.8 "
              d="M53.06 33.086L53.06 33.598L52.036 34.11L52.036 33.598Z"
            />
            <path
              opacity={0.39}
              d="m5.122 12.292 6.146 3.073v13.828c-0.205 -0.615 -0.615 -1.332 -1.024 -1.946 -1.536 -1.844 -3.688 -2.561 -4.917 -1.536 -0.512 0.41 -0.717 1.024 -0.819 1.639L3.073 26.633v-8.195l2.049 -6.146z"
            />
            <path
              opacity={0.39}
              points="12,12 12,28 50,47.1 50,31.1 "
              d="M12.292 12.292L12.292 28.681L51.216 48.246L51.216 31.857Z"
            />
            <path
              opacity={0.06}
              points="64,24.1 64,40.1 50,47.1 50,31.1 "
              d="M65.557 24.686L65.557 41.076L51.216 48.246L51.216 31.857Z"
            />
            <g>
              <path
                fill="#FFCC00"
                points="57.4,28.5 51,31.7 51,37.9 57.2,41 63,38.1 63,31.3  "
                d="M58.796 29.193L52.241 32.471L52.241 38.822L58.592 41.997L64.533 39.027L64.533 32.061Z"
              />
              <path
                opacity={0.29}
                points="51,31.9 51,37.9 57.2,41 57.2,35  "
                d="M52.241 32.676L52.241 38.822L58.592 41.997L58.592 35.851Z"
              />
              <path
                opacity={0.3}
                points="59.6,33.8 59.6,36.7 61.4,35.8 61.4,32.9 55,29.7 53.2,30.6  "
                d="M61.05 34.622L61.05 37.593L62.894 36.671L62.894 33.7L56.338 30.423L54.494 31.344Z"
              />
              <path
                opacity={0.11}
                points="57.2,35 57.2,41 63,38.1 63,32.1  "
                d="M58.592 35.851L58.592 41.997L64.533 39.027L64.533 32.881Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,32.3 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 33.086L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
              <path
                opacity={0.3}
                points="51,36.5 52.6,37.3 52.6,40.2 54.4,39.3 54.4,36.4 51,34.7  "
                d="M52.241 37.388L53.88 38.207L53.88 41.178L55.723 40.256L55.723 37.286L52.241 35.544Z"
              />
              <path
                opacity={0.11}
                points="51,38.1 51,44.1 56.8,41.2 56.8,35.2  "
                d="M52.241 39.027L52.241 45.173L58.182 42.202L58.182 36.056Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="57.2,34.6 63,31.7 63,25.7 51.2,31.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L52.446 32.369Z"
              />
              <path
                opacity={0.29}
                points="57.2,34.6 57.2,28.6 51.2,31.6  "
                d="M58.592 35.442L58.592 29.296L52.446 32.369Z"
              />
              <path
                opacity={0.3}
                points="59.6,27.4 59.6,30.3 61.4,29.4 61.4,26.5  "
                d="M61.05 28.067L61.05 31.037L62.894 30.115L62.894 27.145Z"
              />
              <path
                opacity={0.11}
                points="57.2,34.6 63,31.7 63,25.7 57.2,28.6  "
                d="M58.592 35.442L64.533 32.471L64.533 26.325L58.592 29.296Z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
              <path
                opacity={0.3}
                points="52.6,30.9 52.6,33.8 54.4,32.9 54.4,30  "
                d="M53.88 31.652L53.88 34.622L55.723 33.7L55.723 30.73Z"
              />
              <path
                opacity={0.11}
                points="51,37.7 56.8,34.8 56.8,28.8 51,31.7  "
                d="M52.241 38.617L58.182 35.647L58.182 29.501L52.241 32.471Z"
              />
            </g>
            <path
              fill="#06547A"
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <path
              opacity={0.06}
              points="63,25.6 69,23.5 69,36 63,38.1 "
              d="M64.533 26.223L70.679 24.072L70.679 36.876L64.533 39.027Z"
            />
            <g>
              <path
                fill="#06547A"
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
              <path
                opacity={0.06}
                points="45,35.5 51,31.6 51,44.1 45,48  "
                d="M46.095 36.364L52.241 32.369L52.241 45.173L46.095 49.168Z"
              />
            </g>
          </g>
        </g>
        <g id="i28" className="lvl-1" transform="translate(664 168)">
          <g>
            <g>
              <text
                transform="scale(1.2649 .6324) rotate(45 -23.488 29.76)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"receiving"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i29" className="lvl-1" transform="translate(616 208)">
          <g>
            <g>
              <text
                transform="scale(1.2649 .6324) rotate(45 -23.488 29.76)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"staging"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i30" className="lvl-1" transform="matrix(-1 0 0 1 584 136)">
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="i31" className="lvl-1" transform="matrix(.1 0 0 .1 584 176)">
          <g>
            <path
              opacity={0.3}
              points="83,293 169,336 253,294 167,251 "
              d="M85.019 300.128L173.111 344.174L259.155 301.152L171.063 257.106Z"
            />
            <g>
              <path
                fill="#FF9900"
                d="M120.871 163.892c-2.254 0 -4.097 0.922 -4.097 2.049v101.408c0 1.127 1.844 2.049 4.097 2.049s4.097 -0.922 4.097 -2.049v-101.408c0 -1.127 -1.844 -2.049 -4.097 -2.049z"
              />
              <path
                opacity={0.2}
                d="M120.871 167.99c-2.254 0 -4.097 -0.922 -4.097 -2.049v101.408c0 1.127 1.844 2.049 4.097 2.049s4.097 -0.922 4.097 -2.049v-101.408c0 1.127 -1.844 2.049 -4.097 2.049z"
              />
              <path
                fill="#FF9900"
                d="M120.871 172.087c-0.615 0 -1.229 -0.205 -1.844 -0.512l-23.252 -13.624c-1.127 -0.717 -1.844 -1.946 -1.741 -3.175 0 -1.332 0.819 -2.458 1.946 -3.073l42.714 -21.204c1.434 -0.717 3.073 -0.41 4.2 0.717s1.332 2.868 0.512 4.2l-19.462 34.827c-0.512 0.819 -1.229 1.434 -2.151 1.741 -0.307 0.102 -0.615 0.102 -0.922 0.102zm-15.672 -17.004 14.341 8.399 11.985 -21.511 -26.325 13.111z"
              />
              <path
                opacity={0.2}
                d="M142.894 131.216c-1.127 -1.127 -2.766 -1.434 -4.2 -0.717L96.082 151.601c-1.229 0.615 -1.946 1.741 -1.946 3.073s0.615 2.561 1.741 3.175l23.252 13.624c0.512 0.307 1.229 0.512 1.844 0.512 0.307 0 0.615 0 0.922 -0.102 0.922 -0.205 1.741 -0.819 2.151 -1.741l19.462 -34.827c0.717 -1.229 0.512 -2.971 -0.615 -4.097zm-23.355 32.369 -14.341 -8.399 26.428 -13.111 -12.087 21.511zm20.077 -28.579 -42.714 21.204c-0.205 0.102 -0.41 0.205 -0.717 0.205 -0.615 0 -1.127 -0.307 -1.332 -0.819 -0.41 -0.717 -0.102 -1.639 0.717 -2.049l42.714 -21.204c0.717 -0.41 1.639 -0.102 2.049 0.717s0.102 1.639 -0.717 1.946z"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#825012"
                  points="158,324.4 158,328.4 168,333.4 250,292.4 250,288.4 240,283.4   "
                  d="M161.844 332.292L161.844 336.389L172.087 341.511L256.082 299.513L256.082 295.416L245.839 290.294Z"
                />
                <path
                  opacity={0.11}
                  points="168,333.4 158,328.4 158,324.4 168,329.4   "
                  d="M172.087 341.511L161.844 336.389L161.844 332.292L172.087 337.414Z"
                />
                <path
                  opacity={0.29}
                  points="168,333.4 250,292.4 250,288.4 168,329.4   "
                  d="M172.087 341.511L256.082 299.513L256.082 295.416L172.087 337.414Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="230,278.4 230,288.4 240,293.4 250,288.4 250,278.4 240,273.4   "
                  d="M235.595 285.173L235.595 295.416L245.839 300.538L256.082 295.416L256.082 285.173L245.839 280.051Z"
                />
                <path
                  opacity={0.11}
                  points="240,293.4 230,288.4 230,278.4 240,283.4   "
                  d="M245.839 300.538L235.595 295.416L235.595 285.173L245.839 290.294Z"
                />
                <path
                  opacity={0.29}
                  points="240,293.4 250,288.4 250,278.4 240,283.4   "
                  d="M245.839 300.538L256.082 295.416L256.082 285.173L245.839 290.294Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="194,296.4 194,306.4 204,311.4 214,306.4 214,296.4 204,291.4   "
                  d="M198.72 303.611L198.72 313.854L208.963 318.976L219.206 313.854L219.206 303.611L208.963 298.489Z"
                />
                <path
                  opacity={0.11}
                  points="204,311.4 194,306.4 194,296.4 204,301.4   "
                  d="M208.963 318.976L198.72 313.854L198.72 303.611L208.963 308.732Z"
                />
                <path
                  opacity={0.29}
                  points="204,311.4 214,306.4 214,296.4 204,301.4   "
                  d="M208.963 318.976L219.206 313.854L219.206 303.611L208.963 308.732Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="250,274.4 250,278.4 240,283.4 160,243.4 160,239.4 170,234.4   "
                  d="M256.082 281.076L256.082 285.173L245.839 290.294L163.892 249.321L163.892 245.224L174.136 240.102Z"
                />
                <path
                  opacity={0.29}
                  points="240,283.4 250,278.4 250,274.4 240,279.4   "
                  d="M245.839 290.294L256.082 285.173L256.082 281.076L245.839 286.197Z"
                />
                <path
                  opacity={0.11}
                  points="240,283.4 160,243.4 160,239.4 240,279.4   "
                  d="M245.839 290.294L163.892 249.321L163.892 245.224L245.839 286.197Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="122,306.4 122,310.4 132,315.4 212,275.4 212,271.4 202,266.4   "
                  d="M124.968 313.854L124.968 317.951L135.211 323.073L217.157 282.1L217.157 278.003L206.914 272.881Z"
                />
                <path
                  opacity={0.11}
                  points="132,315.4 122,310.4 122,306.4 132,311.4   "
                  d="M135.211 323.073L124.968 317.951L124.968 313.854L135.211 318.976Z"
                />
                <path
                  opacity={0.29}
                  points="132,315.4 212,275.4 212,271.4 132,311.4   "
                  d="M135.211 323.073L217.157 282.1L217.157 278.003L135.211 318.976Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="86,288.4 86,292.4 96,297.4 176,257.4 176,253.4 166,248.4   "
                  d="M88.092 295.416L88.092 299.513L98.335 304.635L180.282 263.662L180.282 259.565L170.038 254.443Z"
                />
                <path
                  opacity={0.11}
                  points="96,297.4 86,292.4 86,288.4 96,293.4   "
                  d="M98.335 304.635L88.092 299.513L88.092 295.416L98.335 300.538Z"
                />
                <path
                  opacity={0.29}
                  points="96,297.4 176,257.4 176,253.4 96,293.4   "
                  d="M98.335 304.635L180.282 263.662L180.282 259.565L98.335 300.538Z"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="#FF9900"
                    points="108,211 124,203 132,207 146,235 146,249 102,271.1 94,267.1 94,253.1    "
                    d="M110.627 216.133L127.017 207.939L135.211 212.036L149.552 240.717L149.552 255.058L104.481 277.695L96.287 273.598L96.287 259.257Z"
                  />
                  <path
                    opacity={0.11}
                    points="94,267.1 102,271.1 102,257.1 116,215 108,211 94,253.1    "
                    d="M96.287 273.598L104.481 277.695L104.481 263.355L118.822 220.23L110.627 216.133L96.287 259.257Z"
                  />
                  <path
                    opacity={0.29}
                    points="146,249 102,271.1 102,257.1 116,215 132,207 146,235    "
                    d="M149.552 255.058L104.481 277.695L104.481 263.355L118.822 220.23L135.211 212.036L149.552 240.717Z"
                  />
                </g>
                <g>
                  <path
                    fill="#FF9900"
                    points="203.5,318.3 214,313 214,311.5 112,260.5 101.5,265.8 101.5,270.3 176.5,307.7    "
                    d="M208.451 326.044L219.206 320.615L219.206 319.078L114.725 266.837L103.969 272.266L103.969 276.876L180.794 315.186Z"
                  />
                  <path
                    opacity={0.29}
                    points="214,311.5 214,313 203.5,318.3 203.5,316.8    "
                    d="M219.206 319.078L219.206 320.615L208.451 326.044L208.451 324.507Z"
                  />
                  <path
                    opacity={0.11}
                    points="101.5,265.8 101.5,270.3 176.5,307.7 203.5,318.3 203.5,316.8    "
                    d="M103.969 272.266L103.969 276.876L180.794 315.186L208.451 326.044L208.451 324.507Z"
                  />
                </g>
                <g>
                  <path
                    fill="#FF9900"
                    points="237.5,301.3 248,296 248,294.5 146,243.5 135.5,248.8 135.5,253.3 210.5,290.8    "
                    d="M243.278 308.63L254.033 303.201L254.033 301.665L149.552 249.424L138.796 254.853L138.796 259.462L215.621 297.875Z"
                  />
                  <path
                    opacity={0.29}
                    points="248,294.5 248,296 237.5,301.3 237.5,299.8    "
                    d="M254.033 301.665L254.033 303.201L243.278 308.63L243.278 307.093Z"
                  />
                  <path
                    opacity={0.11}
                    points="135.5,248.8 135.5,253.3 210.5,290.8 237.5,301.3 237.5,299.8    "
                    d="M138.796 254.853L138.796 259.462L215.621 297.875L243.278 308.63L243.278 307.093Z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="#825012"
                  points="122,296.4 122,306.4 132,311.4 142,306.4 142,296.4 132,291.4   "
                  d="M124.968 303.611L124.968 313.854L135.211 318.976L145.455 313.854L145.455 303.611L135.211 298.489Z"
                />
                <path
                  opacity={0.11}
                  points="132,311.4 122,306.4 122,296.4 132,301.4   "
                  d="M135.211 318.976L124.968 313.854L124.968 303.611L135.211 308.732Z"
                />
                <path
                  opacity={0.29}
                  points="132,311.4 142,306.4 142,296.4 132,301.4   "
                  d="M135.211 318.976L145.455 313.854L145.455 303.611L135.211 308.732Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="86,278.4 86,288.4 96,293.4 106,288.4 106,278.4 96,273.4   "
                  d="M88.092 285.173L88.092 295.416L98.335 300.538L108.579 295.416L108.579 285.173L98.335 280.051Z"
                />
                <path
                  opacity={0.11}
                  points="96,293.4 86,288.4 86,278.4 96,283.4   "
                  d="M98.335 300.538L88.092 295.416L88.092 285.173L98.335 290.294Z"
                />
                <path
                  opacity={0.29}
                  points="96,293.4 106,288.4 106,278.4 96,283.4   "
                  d="M98.335 300.538L108.579 295.416L108.579 285.173L98.335 290.294Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="158,314.4 158,324.4 168,329.4 178,324.4 178,314.4 168,309.4   "
                  d="M161.844 322.049L161.844 332.292L172.087 337.414L182.33 332.292L182.33 322.049L172.087 316.927Z"
                />
                <path
                  opacity={0.11}
                  points="168,329.4 158,324.4 158,314.4 168,319.4   "
                  d="M172.087 337.414L161.844 332.292L161.844 322.049L172.087 327.17Z"
                />
                <path
                  opacity={0.29}
                  points="168,329.4 178,324.4 178,314.4 168,319.4   "
                  d="M172.087 337.414L182.33 332.292L182.33 322.049L172.087 327.17Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="178,310.4 178,314.4 168,319.4 86,278.4 86,274.4 96,269.4   "
                  d="M182.33 317.951L182.33 322.049L172.087 327.17L88.092 285.173L88.092 281.076L98.335 275.954Z"
                />
                <path
                  opacity={0.29}
                  points="168,319.4 178,314.4 178,310.4 168,315.4   "
                  d="M172.087 327.17L182.33 322.049L182.33 317.951L172.087 323.073Z"
                />
                <path
                  opacity={0.11}
                  points="168,319.4 86,278.4 86,274.4 168,315.4   "
                  d="M172.087 327.17L88.092 285.173L88.092 281.076L172.087 323.073Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="214,292.4 214,296.4 204,301.4 124,261.4 124,257.4 134,252.4   "
                  d="M219.206 299.513L219.206 303.611L208.963 308.732L127.017 267.759L127.017 263.662L137.26 258.54Z"
                />
                <path
                  opacity={0.29}
                  points="204,301.4 214,296.4 214,292.4 204,297.4   "
                  d="M208.963 308.732L219.206 303.611L219.206 299.513L208.963 304.635Z"
                />
                <path
                  opacity={0.11}
                  points="204,301.4 124,261.4 124,257.4 204,297.4   "
                  d="M208.963 308.732L127.017 267.759L127.017 263.662L208.963 304.635Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="158,306.4 158,310.4 168,315.4 250,274.4 250,270.4 240,265.4   "
                  d="M161.844 313.854L161.844 317.951L172.087 323.073L256.082 281.076L256.082 276.978L245.839 271.857Z"
                />
                <path
                  opacity={0.11}
                  points="168,315.4 158,310.4 158,306.4 168,311.4   "
                  d="M172.087 323.073L161.844 317.951L161.844 313.854L172.087 318.976Z"
                />
                <path
                  opacity={0.29}
                  points="168,315.4 250,274.4 250,270.4 168,311.4   "
                  d="M172.087 323.073L256.082 281.076L256.082 276.978L172.087 318.976Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="140,297.4 140,301.4 150,306.4 232,265.4 232,261.4 222,256.4   "
                  d="M143.406 304.635L143.406 308.732L153.649 313.854L237.644 271.857L237.644 267.759L227.401 262.638Z"
                />
                <path
                  opacity={0.11}
                  points="150,306.4 140,301.4 140,297.4 150,302.4   "
                  d="M153.649 313.854L143.406 308.732L143.406 304.635L153.649 309.757Z"
                />
                <path
                  opacity={0.29}
                  points="150,306.4 232,265.4 232,261.4 150,302.4   "
                  d="M153.649 313.854L237.644 271.857L237.644 267.759L153.649 309.757Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="122,288.4 122,292.4 132,297.4 214,256.4 214,252.4 204,247.4   "
                  d="M124.968 295.416L124.968 299.513L135.211 304.635L219.206 262.638L219.206 258.54L208.963 253.419Z"
                />
                <path
                  opacity={0.11}
                  points="132,297.4 122,292.4 122,288.4 132,293.4   "
                  d="M135.211 304.635L124.968 299.513L124.968 295.416L135.211 300.538Z"
                />
                <path
                  opacity={0.29}
                  points="132,297.4 214,256.4 214,252.4 132,293.4   "
                  d="M135.211 304.635L219.206 262.638L219.206 258.54L135.211 300.538Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="104,279.4 104,283.4 114,288.4 196,247.4 196,243.4 186,238.4   "
                  d="M106.53 286.197L106.53 290.294L116.773 295.416L200.768 253.419L200.768 249.321L190.525 244.2Z"
                />
                <path
                  opacity={0.11}
                  points="114,288.4 104,283.4 104,279.4 114,284.4   "
                  d="M116.773 295.416L106.53 290.294L106.53 286.197L116.773 291.319Z"
                />
                <path
                  opacity={0.29}
                  points="114,288.4 196,247.4 196,243.4 114,284.4   "
                  d="M116.773 295.416L200.768 253.419L200.768 249.321L116.773 291.319Z"
                />
              </g>
              <g>
                <path
                  fill="#825012"
                  points="86,270.4 86,274.4 96,279.4 178,238.4 178,234.4 168,229.4   "
                  d="M88.092 276.978L88.092 281.076L98.335 286.197L182.33 244.2L182.33 240.102L172.087 234.981Z"
                />
                <path
                  opacity={0.11}
                  points="96,279.4 86,274.4 86,270.4 96,275.4   "
                  d="M98.335 286.197L88.092 281.076L88.092 276.978L98.335 282.1Z"
                />
                <path
                  opacity={0.29}
                  points="96,279.4 178,238.4 178,234.4 96,275.4   "
                  d="M98.335 286.197L182.33 244.2L182.33 240.102L98.335 282.1Z"
                />
              </g>
            </g>
            <g>
              <path
                opacity={0.2}
                d="M111.14 276.364c-19.155 11.677 -88.092 -43.739 -81.946 -51.114 13.419 -16.492 97.414 41.69 81.946 51.114z"
              />
              <path
                fill="#FBD7C7"
                d="M124.251 131.524s4.712 -1.844 5.429 -2.458c0.717 -0.615 4.609 4.097 5.839 5.531s1.024 3.38 0.205 5.839c-0.922 2.868 -9.014 5.839 -8.707 3.892 0.205 -1.229 2.561 -4.2 2.151 -5.736 -0.205 -0.819 -0.819 -1.946 -2.868 -1.844 -1.332 0 -2.254 0.717 -2.663 1.332 -0.205 0.307 -2.663 1.536 -2.663 0.922 0 -1.127 0 -2.356 0.41 -3.073 0.819 -1.434 2.868 -4.405 2.868 -4.405z"
              />
              <path
                fill="#2D3134"
                d="M83.38 256.594c-0.41 2.049 -0.615 5.736 0.307 7.17 0.922 1.434 6.351 5.941 7.887 7.478 2.049 1.946 5.736 4.814 9.526 5.429 3.892 0.512 10.141 -2.049 9.526 -5.019 -0.307 -1.536 -6.556 -6.351 -9.321 -8.707 -2.458 -2.049 -6.248 -7.887 -6.248 -7.887l-11.677 1.536z"
              />
              <path
                opacity={0.4}
                d="M110.73 271.652c0 -0.102 -0.102 -0.307 -0.205 -0.512 -0.922 2.458 -6.044 4.405 -9.424 3.892 -3.79 -0.512 -7.478 -3.483 -9.526 -5.429 -1.639 -1.536 -6.965 -6.044 -7.887 -7.478 -0.307 -0.41 -0.41 -1.024 -0.512 -1.844 0 1.332 0.205 2.663 0.615 3.38 0.922 1.434 6.351 5.941 7.887 7.478 2.049 1.946 5.736 4.814 9.526 5.429 3.79 0.615 10.038 -1.946 9.526 -4.917z"
              />
              <path
                fill="#2D3134"
                d="M36.671 219.309c-2.151 1.946 -4.814 7.068 -4.302 9.321s7.068 5.327 8.707 6.658 8.399 7.273 10.653 8.502c2.458 1.434 5.327 1.946 7.58 -0.102 1.946 -1.741 -0.307 -6.146 -1.639 -7.58 -1.434 -1.639 -4.917 -4.405 -6.556 -7.068 -1.536 -2.663 -3.175 -7.58 -3.175 -7.58l-11.268 -2.151z"
              />
              <path
                opacity={0.4}
                d="M59.616 242.458c-2.254 2.049 -5.019 1.434 -7.58 0.102 -2.151 -1.229 -8.912 -7.17 -10.653 -8.502s-8.195 -4.507 -8.707 -6.658c-0.102 -0.41 -0.102 -0.922 0 -1.536 -0.41 1.127 -0.512 2.151 -0.41 2.868 0.512 2.151 7.068 5.327 8.707 6.658 1.639 1.332 8.399 7.273 10.653 8.502 2.458 1.434 5.327 1.946 7.58 -0.102 0.512 -0.512 0.717 -1.127 0.717 -1.844 0 0.102 -0.205 0.307 -0.307 0.512z"
              />
              <path
                fill="#06547A"
                d="m71.498 137.977 24.072 3.892s-1.639 11.78 -8.297 22.74 -20.384 26.53 -22.945 29.398c-2.458 2.868 -10.755 21.716 -11.677 23.867 -1.434 3.483 -2.151 8.912 -2.766 9.321 -6.965 4.405 -17.004 -2.356 -16.901 -4.2 0.102 -1.332 8.297 -25.813 15.365 -36.773 3.892 -6.044 11.575 -18.848 13.624 -28.169 2.151 -9.321 9.526 -20.077 9.526 -20.077z"
              />
              <path
                opacity={0.2}
                d="m71.498 137.977 24.072 3.892s-1.639 11.78 -8.297 22.74 -20.384 26.53 -22.945 29.398c-2.458 2.868 -10.755 21.716 -11.677 23.867 -1.434 3.483 -2.151 8.912 -2.766 9.321 -6.965 4.405 -17.004 -2.356 -16.901 -4.2 0.102 -1.332 8.297 -25.813 15.365 -36.773 3.892 -6.044 11.575 -18.848 13.624 -28.169 2.151 -9.321 9.526 -20.077 9.526 -20.077z"
              />
              <path
                fill="#06547A"
                d="M63.099 135.314s-3.38 5.531 -3.995 9.936c-1.536 11.677 3.278 33.7 6.351 42.407s5.839 18.131 6.146 24.379c0.307 6.248 2.663 17.618 4.302 24.994 2.868 13.214 5.736 22.433 6.248 23.867 0.512 1.536 7.478 1.127 10.243 0.512s6.351 -1.639 6.453 -2.458c0.102 -0.819 -3.38 -14.443 -4.917 -22.125 -1.536 -7.58 -4.405 -26.94 -4.405 -33.496 0 -6.556 0.717 -26.018 0.307 -36.569 -0.41 -10.551 -3.995 -27.35 -3.995 -27.35l-22.74 -4.097z"
              />
              <path
                fill="#3399CC"
                d="M106.94 83.688c0.819 2.458 4.2 26.428 4.917 28.169 0.717 1.741 19.36 16.799 19.667 18.028s-7.273 4.712 -9.219 3.585c-1.639 -0.922 -7.682 -4.712 -13.111 -8.809 -1.639 -1.229 -7.682 -7.478 -8.092 -8.502s-0.512 -14.238 -0.819 -15.57c-0.307 -1.229 6.658 -16.901 6.658 -16.901z"
              />
              <path
                fill="#3399CC"
                d="M84.712 148.937s-12.087 -71.601 -9.424 -72.932 11.985 -3.073 16.082 -3.278c4.2 -0.205 11.165 4.302 11.165 4.302l-7.068 72.01H84.712z"
              />
              <path
                fill="#99CC33"
                d="M75.288 75.903s-7.17 4.2 -10.141 8.399 -5.429 11.165 -5.531 19.77c0 8.604 -0.512 30.525 -0.819 35.032s8.604 7.375 14.443 9.117c5.839 1.639 14.033 2.049 16.184 1.024 2.151 -1.127 2.868 -12.497 3.79 -21.408 0.512 -4.814 0.717 -18.643 -1.127 -25.506C89.117 90.858 75.288 75.903 75.288 75.903z"
              />
              <path
                fill="#99CC33"
                d="M97.721 74.776s-1.024 20.077 -2.766 28.476 -2.561 39.641 -1.844 42.407c0.717 2.766 0.922 3.892 3.278 4.302 2.356 0.41 3.38 -1.434 3.585 -3.073 0.205 -2.151 1.024 -18.028 1.127 -21.613 0 -3.585 0.922 -13.316 2.151 -16.594 1.229 -3.278 5.941 -21.204 5.122 -23.662 -0.922 -2.663 -4.609 -9.424 -10.653 -10.243z"
              />
              <path
                fill="#FBD7C7"
                d="m103.355 135.314 -4.507 6.351s8.195 6.248 8.809 6.248c0.717 0 2.868 2.049 2.561 3.38 -0.307 1.332 -1.844 2.151 -1.332 2.561 1.639 1.332 7.375 -0.717 8.707 -3.073s0.615 -6.044 -0.307 -7.273c-0.819 -1.229 -2.049 -1.844 -3.278 -2.663 -2.151 -1.332 -10.653 -5.531 -10.653 -5.531z"
              />
              <path
                fill="#3399CC"
                d="M64.02 88.195c-2.766 0.717 -5.224 10.038 -4.917 15.058 0.819 14.443 4.814 27.452 5.531 29.296 1.741 4.712 39.232 13.931 40.256 14.443s6.453 -6.761 6.248 -8.195 -21.613 -9.117 -24.891 -10.551c-2.663 -1.127 -10.755 -3.892 -10.755 -3.892s-0.102 -5.941 0.307 -11.882c0.41 -7.068 0.819 -10.755 0.819 -13.521 -0.205 -5.736 -5.531 -12.497 -12.599 -10.755z"
              />
              <path
                fill="#FBD7C7"
                d="M77.951 75.391s2.868 -1.229 3.073 -3.278c0.205 -2.049 -6.248 -10.141 -0.819 -17.721 5.429 -7.478 18.745 -6.146 20.999 1.332s2.458 21.716 0.717 23.15c-2.254 1.844 -6.248 1.127 -6.248 1.127s-1.332 3.483 -1.024 5.429c0.512 2.766 -2.151 3.073 -3.483 2.971 -1.946 0 -11.268 -3.483 -13.214 -13.009z"
              />
              <path
                fill="#762C07"
                d="m80.205 70.269 1.639 1.024s-4.405 -5.941 -1.434 -7.17c2.868 -1.229 4.302 2.356 4.302 2.356s2.151 -3.79 5.531 -4.097 12.599 -2.356 12.292 -5.327c-0.102 -1.127 -3.688 -11.063 -14.648 -9.117S76.62 58.899 77.234 62.484c0.717 3.79 2.971 7.785 2.971 7.785z"
              />
            </g>
            <g>
              <path
                fill="#FFCC00"
                points="90,190.4 90,270.4 170,310.4 250,270.4 250,190.4 170,150.4  "
                d="M92.19 195.032L92.19 276.978L174.136 317.951L256.082 276.978L256.082 195.032L174.136 154.059Z"
              />
              <path
                opacity={0.11}
                points="170,310.4 90,270.4 90,190.4 170,230.4  "
                d="M174.136 317.951L92.19 276.978L92.19 195.032L174.136 236.005Z"
              />
              <path
                opacity={0.3}
                points="140,165.4 120,175.4 200,215.4 200,255.4 220,245.4 220,205.4  "
                d="M143.406 169.424L122.919 179.667L204.866 220.64L204.866 261.613L225.352 251.37L225.352 210.397Z"
              />
              <path
                opacity={0.29}
                points="170,310.4 250,270.4 250,190.4 170,230.4  "
                d="M174.136 317.951L256.082 276.978L256.082 195.032L174.136 236.005Z"
              />
            </g>
          </g>
        </g>
        <g id="i32" className="lvl-1" transform="translate(192 32)">
        </g>
        <g id="i33" className="lvl-1" transform="translate(448 192)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i34" className="lvl-1" transform="translate(384 224)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i35" className="lvl-1" transform="translate(320 256)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i36" className="lvl-1" transform="translate(256 288)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i37" className="lvl-1" transform="translate(192 320)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i38" className="lvl-1" transform="translate(640 288)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i39" className="lvl-1" transform="translate(576 320)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i40" className="lvl-1" transform="translate(512 352)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i41" className="lvl-1" transform="translate(448 384)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i42" className="lvl-1" transform="translate(384 416)">
          <g>
            <g fill="#39c">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i43" className="lvl-1" transform="translate(256 248)">
          <g>
            <g>
              <text
                transform="matrix(.8944 -.4472 .8944 .4472 34.05 92.94)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"static storage"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i44" className="lvl-1" transform="translate(408 264)">
          <g>
            <g>
              <text
                transform="matrix(.8944 -.4472 .8944 .4472 34.05 92.94)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"dynamic storage"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i45" className="lvl-1" transform="translate(440 344)">
          <g>
            <g>
              <text
                transform="matrix(.8944 -.4472 .8944 .4472 34.05 92.94)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"static storage"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i46" className="lvl-1" transform="translate(128 352)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i47" className="lvl-1" transform="translate(192 384)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i48" className="lvl-1" transform="translate(256 416)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i49" className="lvl-1" transform="translate(320 448)">
          <g>
            <g fill="#999">
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
              <path d="m65.557 0 65.557 32.778 -65.557 32.778L0 32.778z" />
            </g>
          </g>
        </g>
        <g id="i50" className="lvl-1" transform="translate(232 400)">
          <g>
            <g>
              <text
                transform="scale(1.2649 .6324) rotate(45 -23.488 29.76)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"staging"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i51" className="lvl-1" transform="matrix(-1 0 0 1 128 432)">
          <g>
            <path
              d="m3.073 28.988 13.419 -7.682 49.065 24.584 -14.341 7.17z"
              opacity={0.3}
            />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" fill="#2d3134" />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" opacity={0.06} />
            <path
              d="M47.324 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.615 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.585 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M47.939 50.499c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.332 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M48.041 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M46.095 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.102 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M46.812 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M48.758 48.963c0 1.536 -1.332 2.254 -2.868 1.434S43.022 47.631 43.022 46.095s1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M9.936 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.536 -1.332 -3.483 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M10.551 31.857c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M10.653 29.91c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M8.707 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.205 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M9.424 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.922 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M11.37 30.218c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.766 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M17.414 1.024 3.073 8.195v15.672l38.924 19.462L56.338 35.851V20.487z"
              fill="#06547a"
            />
            <path
              d="M3.073 22.535v2.049l38.924 19.462v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M56.338 34.827v2.049l-14.341 7.17v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M3.073 8.195v16.389l38.924 19.462V27.657z"
              opacity={0.39}
            />
            <path
              d="M56.338 20.487v16.389l-14.341 7.17V27.657z"
              opacity={0.06}
            />
            <path
              d="m63.508 28.681 -6.146 -3.073 -14.341 7.17v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.922 1.127 1.332 2.356 1.332 3.38l1.229 0.615 14.341 -7.17v-8.195z"
              fill="#e5e5e5"
            />
            <path
              d="m51.626 41.485 -1.741 -5.122c-0.102 -0.205 0 -0.307 0.205 -0.41l12.804 -6.351c0.205 -0.102 0.41 0 0.512 0.205l1.639 4.814c0.102 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.512 0 -0.512 -0.205z"
              fill="#39c"
            />
            <path
              d="m53.982 34.008 8.809 -4.405c0.205 -0.102 0.41 0 0.512 0.205l1.536 4.507z"
              opacity={0.15}
            />
            <path
              d="m64.942 34.622 -0.102 -0.307c0 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.41 0 -0.512 -0.205l0.102 0.307c0.102 0.205 0.307 0.307 0.512 0.205l12.702 -6.658c0.205 -0.102 0.307 -0.205 0.205 -0.41z"
              fill="#2d3134"
            />
            <path
              d="m54.802 40.973 7.17 -3.585v5.941l-7.17 3.585z"
              fill="#fff"
            />
            <path
              d="m55.314 46.095 6.146 -3.073v-4.814l-6.146 3.073z"
              fill="#2d3134"
            />
            <path
              d="M65.557 43.022v-2.049l-14.341 7.17v2.049z"
              fill="#2d3134"
            />
            <path
              d="m49.168 49.168 2.049 1.024v-2.049l-2.049 -1.024z"
              fill="#2d3134"
            />
            <path d="M55.314 46.095v1.024l6.146 -3.073v-1.024z" fill="#fff" />
            <path
              d="m48.656 36.159 -3.892 -1.946c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.102 0.102 0.307 -0.102 0.205 -0.205l-1.741 -5.122c0.205 0 0.205 -0.102 0.102 -0.102z"
              fill="#39c"
            />
            <path
              d="m50.499 41.28 -2.049 -1.024h-0.102l-1.332 -1.639c-0.102 -0.102 -0.205 -0.205 -0.307 -0.205l-1.332 -0.717c-0.205 -0.102 -0.307 -0.205 -0.307 -0.41v-2.971l-0.205 -0.102c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.205 0.102 0.307 0 0.307 -0.307z"
              opacity={0.15}
            />
            <path d="M51.216 46.095v2.049l-0.512 -0.205v-2.049z" fill="#fc0" />
            <g fill="#e5e5e5">
              <path d="M55.314 41.997v0.307l6.146 -3.073V38.924z" />
              <path d="M55.314 43.022v0.307l6.146 -3.073V39.949z" />
              <path d="M55.314 44.046v0.307l6.146 -3.073V40.973z" />
              <path d="M55.314 45.07v0.307l6.146 -3.073V41.997z" />
            </g>
            <path
              d="M44.558 39.232v0.512l1.024 0.512v-0.512z"
              fill="#2d3134"
              opacity={0.5}
            />
            <path
              d="m45.583 40.461 -1.024 -0.512v-0.205l1.024 0.512z"
              fill="#fff"
              opacity={0.5}
            />
            <path
              d="M58.899 34.725c-0.102 -0.102 -0.205 -0.102 -0.307 0l-3.892 4.405c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l1.024 -1.229v1.024h0.307V37.9l2.561 -2.971c0.102 0 0.102 -0.205 0 -0.205z"
              fill="#2d3134"
            />
            <path
              d="M62.586 32.676c-0.102 -0.102 -0.205 -0.102 -0.307 0L58.387 37.081c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l0.922 -1.024v1.127h0.307v-1.434l2.663 -3.073c0.102 -0.102 0.102 -0.205 0 -0.307z"
              fill="#2d3134"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049l-1.024 0.512c-0.615 0.307 -1.024 0.922 -1.024 1.639z"
              fill="#fff"
            />
            <path
              cx={62.7}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 131.91)"
              d="M65.045 40.461A0.819 0.512 0 0 1 64.225 40.973A0.819 0.512 0 0 1 63.406 40.461A0.819 0.512 0 0 1 65.045 40.461z"
            />
            <path
              cx={63.2}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 132.962)"
              d="M65.557 40.461A0.819 0.512 0 0 1 64.738 40.973A0.819 0.512 0 0 1 63.918 40.461A0.819 0.512 0 0 1 65.557 40.461z"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m51.216 48.143 2.049 -1.024v-0.922c0 -0.512 -0.512 -0.819 -1.024 -0.615l-1.024 0.512z"
              fill="#fff"
            />
            <path
              cx={51.2}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 107.723)"
              d="M53.265 46.607A0.819 0.512 0 0 1 52.446 47.119A0.819 0.512 0 0 1 51.626 46.607A0.819 0.512 0 0 1 53.265 46.607z"
            />
            <path
              cx={50.7}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 106.671)"
              d="M52.753 46.607A0.819 0.512 0 0 1 51.933 47.119A0.819 0.512 0 0 1 51.114 46.607A0.819 0.512 0 0 1 52.753 46.607z"
            />
            <path
              d="m51.216 48.143 2.049 -1.024 -2.049 -1.024z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m49.168 35.851 -6.146 -3.073v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.307 0.307 0.512 0.615 0.615 1.024L49.168 47.119v2.049l2.049 1.024v-8.195z"
              opacity={0.39}
            />
            <path
              d="m63.508 28.681 -14.341 7.17 2.049 6.146v8.195l14.341 -7.17v-8.195z"
              opacity={0.06}
            />
          </g>
        </g>
        <g id="i52" className="lvl-1" transform="matrix(-1 0 0 1 176 456)">
          <g>
            <path
              d="m3.073 28.988 13.419 -7.682 49.065 24.584 -14.341 7.17z"
              opacity={0.3}
            />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" fill="#2d3134" />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" opacity={0.06} />
            <path
              d="M47.324 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.615 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.585 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M47.939 50.499c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.332 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M48.041 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M46.095 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.102 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M46.812 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M48.758 48.963c0 1.536 -1.332 2.254 -2.868 1.434S43.022 47.631 43.022 46.095s1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M9.936 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.536 -1.332 -3.483 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M10.551 31.857c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M10.653 29.91c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M8.707 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.205 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M9.424 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.922 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M11.37 30.218c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.766 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M17.414 1.024 3.073 8.195v15.672l38.924 19.462L56.338 35.851V20.487z"
              fill="#06547a"
            />
            <path
              d="M3.073 22.535v2.049l38.924 19.462v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M56.338 34.827v2.049l-14.341 7.17v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M3.073 8.195v16.389l38.924 19.462V27.657z"
              opacity={0.39}
            />
            <path
              d="M56.338 20.487v16.389l-14.341 7.17V27.657z"
              opacity={0.06}
            />
            <path
              d="m63.508 28.681 -6.146 -3.073 -14.341 7.17v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.922 1.127 1.332 2.356 1.332 3.38l1.229 0.615 14.341 -7.17v-8.195z"
              fill="#e5e5e5"
            />
            <path
              d="m51.626 41.485 -1.741 -5.122c-0.102 -0.205 0 -0.307 0.205 -0.41l12.804 -6.351c0.205 -0.102 0.41 0 0.512 0.205l1.639 4.814c0.102 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.512 0 -0.512 -0.205z"
              fill="#39c"
            />
            <path
              d="m53.982 34.008 8.809 -4.405c0.205 -0.102 0.41 0 0.512 0.205l1.536 4.507z"
              opacity={0.15}
            />
            <path
              d="m64.942 34.622 -0.102 -0.307c0 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.41 0 -0.512 -0.205l0.102 0.307c0.102 0.205 0.307 0.307 0.512 0.205l12.702 -6.658c0.205 -0.102 0.307 -0.205 0.205 -0.41z"
              fill="#2d3134"
            />
            <path
              d="m54.802 40.973 7.17 -3.585v5.941l-7.17 3.585z"
              fill="#fff"
            />
            <path
              d="m55.314 46.095 6.146 -3.073v-4.814l-6.146 3.073z"
              fill="#2d3134"
            />
            <path
              d="M65.557 43.022v-2.049l-14.341 7.17v2.049z"
              fill="#2d3134"
            />
            <path
              d="m49.168 49.168 2.049 1.024v-2.049l-2.049 -1.024z"
              fill="#2d3134"
            />
            <path d="M55.314 46.095v1.024l6.146 -3.073v-1.024z" fill="#fff" />
            <path
              d="m48.656 36.159 -3.892 -1.946c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.102 0.102 0.307 -0.102 0.205 -0.205l-1.741 -5.122c0.205 0 0.205 -0.102 0.102 -0.102z"
              fill="#39c"
            />
            <path
              d="m50.499 41.28 -2.049 -1.024h-0.102l-1.332 -1.639c-0.102 -0.102 -0.205 -0.205 -0.307 -0.205l-1.332 -0.717c-0.205 -0.102 -0.307 -0.205 -0.307 -0.41v-2.971l-0.205 -0.102c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.205 0.102 0.307 0 0.307 -0.307z"
              opacity={0.15}
            />
            <path d="M51.216 46.095v2.049l-0.512 -0.205v-2.049z" fill="#fc0" />
            <g fill="#e5e5e5">
              <path d="M55.314 41.997v0.307l6.146 -3.073V38.924z" />
              <path d="M55.314 43.022v0.307l6.146 -3.073V39.949z" />
              <path d="M55.314 44.046v0.307l6.146 -3.073V40.973z" />
              <path d="M55.314 45.07v0.307l6.146 -3.073V41.997z" />
            </g>
            <path
              d="M44.558 39.232v0.512l1.024 0.512v-0.512z"
              fill="#2d3134"
              opacity={0.5}
            />
            <path
              d="m45.583 40.461 -1.024 -0.512v-0.205l1.024 0.512z"
              fill="#fff"
              opacity={0.5}
            />
            <path
              d="M58.899 34.725c-0.102 -0.102 -0.205 -0.102 -0.307 0l-3.892 4.405c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l1.024 -1.229v1.024h0.307V37.9l2.561 -2.971c0.102 0 0.102 -0.205 0 -0.205z"
              fill="#2d3134"
            />
            <path
              d="M62.586 32.676c-0.102 -0.102 -0.205 -0.102 -0.307 0L58.387 37.081c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l0.922 -1.024v1.127h0.307v-1.434l2.663 -3.073c0.102 -0.102 0.102 -0.205 0 -0.307z"
              fill="#2d3134"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049l-1.024 0.512c-0.615 0.307 -1.024 0.922 -1.024 1.639z"
              fill="#fff"
            />
            <path
              cx={62.7}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 131.91)"
              d="M65.045 40.461A0.819 0.512 0 0 1 64.225 40.973A0.819 0.512 0 0 1 63.406 40.461A0.819 0.512 0 0 1 65.045 40.461z"
            />
            <path
              cx={63.2}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 132.962)"
              d="M65.557 40.461A0.819 0.512 0 0 1 64.738 40.973A0.819 0.512 0 0 1 63.918 40.461A0.819 0.512 0 0 1 65.557 40.461z"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m51.216 48.143 2.049 -1.024v-0.922c0 -0.512 -0.512 -0.819 -1.024 -0.615l-1.024 0.512z"
              fill="#fff"
            />
            <path
              cx={51.2}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 107.723)"
              d="M53.265 46.607A0.819 0.512 0 0 1 52.446 47.119A0.819 0.512 0 0 1 51.626 46.607A0.819 0.512 0 0 1 53.265 46.607z"
            />
            <path
              cx={50.7}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 106.671)"
              d="M52.753 46.607A0.819 0.512 0 0 1 51.933 47.119A0.819 0.512 0 0 1 51.114 46.607A0.819 0.512 0 0 1 52.753 46.607z"
            />
            <path
              d="m51.216 48.143 2.049 -1.024 -2.049 -1.024z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m49.168 35.851 -6.146 -3.073v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.307 0.307 0.512 0.615 0.615 1.024L49.168 47.119v2.049l2.049 1.024v-8.195z"
              opacity={0.39}
            />
            <path
              d="m63.508 28.681 -14.341 7.17 2.049 6.146v8.195l14.341 -7.17v-8.195z"
              opacity={0.06}
            />
          </g>
        </g>
        <g id="i53" className="lvl-1" transform="matrix(-1 0 0 1 224 480)">
          <g>
            <path
              d="m3.073 28.988 13.419 -7.682 49.065 24.584 -14.341 7.17z"
              opacity={0.3}
            />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" fill="#2d3134" />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" opacity={0.06} />
            <path
              d="M47.324 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.615 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.585 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M47.939 50.499c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.332 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M48.041 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M46.095 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.102 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M46.812 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M48.758 48.963c0 1.536 -1.332 2.254 -2.868 1.434S43.022 47.631 43.022 46.095s1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M9.936 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.536 -1.332 -3.483 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M10.551 31.857c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M10.653 29.91c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M8.707 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.205 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M9.424 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.922 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M11.37 30.218c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.766 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M17.414 1.024 3.073 8.195v15.672l38.924 19.462L56.338 35.851V20.487z"
              fill="#06547a"
            />
            <path
              d="M3.073 22.535v2.049l38.924 19.462v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M56.338 34.827v2.049l-14.341 7.17v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M3.073 8.195v16.389l38.924 19.462V27.657z"
              opacity={0.39}
            />
            <path
              d="M56.338 20.487v16.389l-14.341 7.17V27.657z"
              opacity={0.06}
            />
            <path
              d="m63.508 28.681 -6.146 -3.073 -14.341 7.17v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.922 1.127 1.332 2.356 1.332 3.38l1.229 0.615 14.341 -7.17v-8.195z"
              fill="#e5e5e5"
            />
            <path
              d="m51.626 41.485 -1.741 -5.122c-0.102 -0.205 0 -0.307 0.205 -0.41l12.804 -6.351c0.205 -0.102 0.41 0 0.512 0.205l1.639 4.814c0.102 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.512 0 -0.512 -0.205z"
              fill="#39c"
            />
            <path
              d="m53.982 34.008 8.809 -4.405c0.205 -0.102 0.41 0 0.512 0.205l1.536 4.507z"
              opacity={0.15}
            />
            <path
              d="m64.942 34.622 -0.102 -0.307c0 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.41 0 -0.512 -0.205l0.102 0.307c0.102 0.205 0.307 0.307 0.512 0.205l12.702 -6.658c0.205 -0.102 0.307 -0.205 0.205 -0.41z"
              fill="#2d3134"
            />
            <path
              d="m54.802 40.973 7.17 -3.585v5.941l-7.17 3.585z"
              fill="#fff"
            />
            <path
              d="m55.314 46.095 6.146 -3.073v-4.814l-6.146 3.073z"
              fill="#2d3134"
            />
            <path
              d="M65.557 43.022v-2.049l-14.341 7.17v2.049z"
              fill="#2d3134"
            />
            <path
              d="m49.168 49.168 2.049 1.024v-2.049l-2.049 -1.024z"
              fill="#2d3134"
            />
            <path d="M55.314 46.095v1.024l6.146 -3.073v-1.024z" fill="#fff" />
            <path
              d="m48.656 36.159 -3.892 -1.946c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.102 0.102 0.307 -0.102 0.205 -0.205l-1.741 -5.122c0.205 0 0.205 -0.102 0.102 -0.102z"
              fill="#39c"
            />
            <path
              d="m50.499 41.28 -2.049 -1.024h-0.102l-1.332 -1.639c-0.102 -0.102 -0.205 -0.205 -0.307 -0.205l-1.332 -0.717c-0.205 -0.102 -0.307 -0.205 -0.307 -0.41v-2.971l-0.205 -0.102c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.205 0.102 0.307 0 0.307 -0.307z"
              opacity={0.15}
            />
            <path d="M51.216 46.095v2.049l-0.512 -0.205v-2.049z" fill="#fc0" />
            <g fill="#e5e5e5">
              <path d="M55.314 41.997v0.307l6.146 -3.073V38.924z" />
              <path d="M55.314 43.022v0.307l6.146 -3.073V39.949z" />
              <path d="M55.314 44.046v0.307l6.146 -3.073V40.973z" />
              <path d="M55.314 45.07v0.307l6.146 -3.073V41.997z" />
            </g>
            <path
              d="M44.558 39.232v0.512l1.024 0.512v-0.512z"
              fill="#2d3134"
              opacity={0.5}
            />
            <path
              d="m45.583 40.461 -1.024 -0.512v-0.205l1.024 0.512z"
              fill="#fff"
              opacity={0.5}
            />
            <path
              d="M58.899 34.725c-0.102 -0.102 -0.205 -0.102 -0.307 0l-3.892 4.405c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l1.024 -1.229v1.024h0.307V37.9l2.561 -2.971c0.102 0 0.102 -0.205 0 -0.205z"
              fill="#2d3134"
            />
            <path
              d="M62.586 32.676c-0.102 -0.102 -0.205 -0.102 -0.307 0L58.387 37.081c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l0.922 -1.024v1.127h0.307v-1.434l2.663 -3.073c0.102 -0.102 0.102 -0.205 0 -0.307z"
              fill="#2d3134"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049l-1.024 0.512c-0.615 0.307 -1.024 0.922 -1.024 1.639z"
              fill="#fff"
            />
            <path
              cx={62.7}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 131.91)"
              d="M65.045 40.461A0.819 0.512 0 0 1 64.225 40.973A0.819 0.512 0 0 1 63.406 40.461A0.819 0.512 0 0 1 65.045 40.461z"
            />
            <path
              cx={63.2}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 132.962)"
              d="M65.557 40.461A0.819 0.512 0 0 1 64.738 40.973A0.819 0.512 0 0 1 63.918 40.461A0.819 0.512 0 0 1 65.557 40.461z"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m51.216 48.143 2.049 -1.024v-0.922c0 -0.512 -0.512 -0.819 -1.024 -0.615l-1.024 0.512z"
              fill="#fff"
            />
            <path
              cx={51.2}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 107.723)"
              d="M53.265 46.607A0.819 0.512 0 0 1 52.446 47.119A0.819 0.512 0 0 1 51.626 46.607A0.819 0.512 0 0 1 53.265 46.607z"
            />
            <path
              cx={50.7}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 106.671)"
              d="M52.753 46.607A0.819 0.512 0 0 1 51.933 47.119A0.819 0.512 0 0 1 51.114 46.607A0.819 0.512 0 0 1 52.753 46.607z"
            />
            <path
              d="m51.216 48.143 2.049 -1.024 -2.049 -1.024z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m49.168 35.851 -6.146 -3.073v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.307 0.307 0.512 0.615 0.615 1.024L49.168 47.119v2.049l2.049 1.024v-8.195z"
              opacity={0.39}
            />
            <path
              d="m63.508 28.681 -14.341 7.17 2.049 6.146v8.195l14.341 -7.17v-8.195z"
              opacity={0.06}
            />
          </g>
        </g>
        <g id="i54" className="lvl-1" transform="matrix(-1 0 0 1 272 504)">
          <g>
            <path
              d="m3.073 28.988 13.419 -7.682 49.065 24.584 -14.341 7.17z"
              opacity={0.3}
            />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" fill="#2d3134" />
            <path d="M5.429 25.608v3.892l2.561 -1.332v-3.79z" opacity={0.06} />
            <path
              d="M47.324 43.944c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.615 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.639 -1.332 -3.585 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M47.939 50.499c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.332 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M48.041 48.553c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M46.095 49.577c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.102 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M46.914 47.836c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.615 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M46.812 47.939c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M48.758 48.963c0 1.536 -1.332 2.254 -2.868 1.434S43.022 47.631 43.022 46.095s1.332 -2.254 2.868 -1.434 2.868 2.663 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M9.936 25.198c-0.717 -0.41 -1.434 -0.41 -1.946 -0.205l-1.434 0.717c-0.512 0.205 -0.922 0.819 -0.922 1.639 0 1.536 1.332 3.483 2.868 4.302 0.819 0.41 1.536 0.41 2.049 0.205 0 0 1.434 -0.717 1.536 -0.819 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -1.536 -1.332 -3.483 -2.868 -4.302z"
              fill="#2d3134"
            />
            <path
              d="M10.551 31.857c0.205 -0.102 1.434 -0.717 1.536 -0.717 0.512 -0.307 0.717 -0.819 0.717 -1.536 0 -0.615 -0.205 -1.332 -0.512 -1.946l-1.434 0.717c0.307 0.615 0.512 1.332 0.512 1.946 0 0.717 -0.307 1.229 -0.819 1.536z"
              opacity={0.06}
            />
            <path
              d="M10.653 29.91c0 1.229 -0.922 1.639 -2.151 1.024s-2.151 -2.049 -2.151 -3.278 0.922 -1.639 2.151 -1.024 2.151 2.049 2.151 3.278z"
              fill="#999"
            />
            <path
              d="M8.707 30.832c-1.229 -0.615 -2.151 -2.049 -2.151 -3.278 0 -0.615 0.205 -1.024 0.615 -1.229 -0.512 0.102 -0.819 0.615 -0.819 1.229 0 1.229 0.922 2.663 2.151 3.278 0.615 0.307 1.127 0.307 1.536 0.102 -0.41 0.205 -0.819 0.205 -1.332 -0.102z"
              opacity={0.15}
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M9.629 29.193c0 0.512 -0.41 0.717 -0.922 0.41 -0.512 -0.205 -0.922 -0.819 -0.922 -1.332s0.41 -0.717 0.922 -0.41c0.512 0.205 0.922 0.819 0.922 1.332z"
              opacity={0.06}
            />
            <path
              d="M9.424 29.193c0 0.512 -0.41 0.717 -0.922 0.41s-0.922 -0.819 -0.922 -1.332 0.41 -0.717 0.922 -0.41 0.922 0.922 0.922 1.332z"
              fill="#2d3134"
            />
            <path
              d="M11.37 30.218c0 1.536 -1.332 2.254 -2.868 1.434s-2.868 -2.766 -2.868 -4.302 1.332 -2.254 2.868 -1.434 2.868 2.766 2.868 4.302z"
              opacity={0.39}
            />
            <path
              d="M17.414 1.024 3.073 8.195v15.672l38.924 19.462L56.338 35.851V20.487z"
              fill="#06547a"
            />
            <path
              d="M3.073 22.535v2.049l38.924 19.462v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M56.338 34.827v2.049l-14.341 7.17v-2.049z"
              fill="#2d3134"
            />
            <path
              d="M3.073 8.195v16.389l38.924 19.462V27.657z"
              opacity={0.39}
            />
            <path
              d="M56.338 20.487v16.389l-14.341 7.17V27.657z"
              opacity={0.06}
            />
            <path
              d="m63.508 28.681 -6.146 -3.073 -14.341 7.17v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.922 1.127 1.332 2.356 1.332 3.38l1.229 0.615 14.341 -7.17v-8.195z"
              fill="#e5e5e5"
            />
            <path
              d="m51.626 41.485 -1.741 -5.122c-0.102 -0.205 0 -0.307 0.205 -0.41l12.804 -6.351c0.205 -0.102 0.41 0 0.512 0.205l1.639 4.814c0.102 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.512 0 -0.512 -0.205z"
              fill="#39c"
            />
            <path
              d="m53.982 34.008 8.809 -4.405c0.205 -0.102 0.41 0 0.512 0.205l1.536 4.507z"
              opacity={0.15}
            />
            <path
              d="m64.942 34.622 -0.102 -0.307c0 0.205 0 0.307 -0.205 0.41l-12.702 6.658c-0.205 0.102 -0.41 0 -0.512 -0.205l0.102 0.307c0.102 0.205 0.307 0.307 0.512 0.205l12.702 -6.658c0.205 -0.102 0.307 -0.205 0.205 -0.41z"
              fill="#2d3134"
            />
            <path
              d="m54.802 40.973 7.17 -3.585v5.941l-7.17 3.585z"
              fill="#fff"
            />
            <path
              d="m55.314 46.095 6.146 -3.073v-4.814l-6.146 3.073z"
              fill="#2d3134"
            />
            <path
              d="M65.557 43.022v-2.049l-14.341 7.17v2.049z"
              fill="#2d3134"
            />
            <path
              d="m49.168 49.168 2.049 1.024v-2.049l-2.049 -1.024z"
              fill="#2d3134"
            />
            <path d="M55.314 46.095v1.024l6.146 -3.073v-1.024z" fill="#fff" />
            <path
              d="m48.656 36.159 -3.892 -1.946c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.102 0.102 0.307 -0.102 0.205 -0.205l-1.741 -5.122c0.205 0 0.205 -0.102 0.102 -0.102z"
              fill="#39c"
            />
            <path
              d="m50.499 41.28 -2.049 -1.024h-0.102l-1.332 -1.639c-0.102 -0.102 -0.205 -0.205 -0.307 -0.205l-1.332 -0.717c-0.205 -0.102 -0.307 -0.205 -0.307 -0.41v-2.971l-0.205 -0.102c-0.102 -0.102 -0.307 0 -0.307 0.205v3.073c0 0.205 0.102 0.41 0.307 0.41l1.332 0.717c0.102 0.102 0.205 0.102 0.307 0.205l1.332 1.639h0.102l2.254 1.127c0.205 0.102 0.307 0 0.307 -0.307z"
              opacity={0.15}
            />
            <path d="M51.216 46.095v2.049l-0.512 -0.205v-2.049z" fill="#fc0" />
            <g fill="#e5e5e5">
              <path d="M55.314 41.997v0.307l6.146 -3.073V38.924z" />
              <path d="M55.314 43.022v0.307l6.146 -3.073V39.949z" />
              <path d="M55.314 44.046v0.307l6.146 -3.073V40.973z" />
              <path d="M55.314 45.07v0.307l6.146 -3.073V41.997z" />
            </g>
            <path
              d="M44.558 39.232v0.512l1.024 0.512v-0.512z"
              fill="#2d3134"
              opacity={0.5}
            />
            <path
              d="m45.583 40.461 -1.024 -0.512v-0.205l1.024 0.512z"
              fill="#fff"
              opacity={0.5}
            />
            <path
              d="M58.899 34.725c-0.102 -0.102 -0.205 -0.102 -0.307 0l-3.892 4.405c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l1.024 -1.229v1.024h0.307V37.9l2.561 -2.971c0.102 0 0.102 -0.205 0 -0.205z"
              fill="#2d3134"
            />
            <path
              d="M62.586 32.676c-0.102 -0.102 -0.205 -0.102 -0.307 0L58.387 37.081c-0.102 0.102 -0.102 0.205 0 0.307s0.205 0.102 0.307 0l0.922 -1.024v1.127h0.307v-1.434l2.663 -3.073c0.102 -0.102 0.102 -0.205 0 -0.307z"
              fill="#2d3134"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049l-1.024 0.512c-0.615 0.307 -1.024 0.922 -1.024 1.639z"
              fill="#fff"
            />
            <path
              cx={62.7}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 131.91)"
              d="M65.045 40.461A0.819 0.512 0 0 1 64.225 40.973A0.819 0.512 0 0 1 63.406 40.461A0.819 0.512 0 0 1 65.045 40.461z"
            />
            <path
              cx={63.2}
              cy={39.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -83.174 132.962)"
              d="M65.557 40.461A0.819 0.512 0 0 1 64.738 40.973A0.819 0.512 0 0 1 63.918 40.461A0.819 0.512 0 0 1 65.557 40.461z"
            />
            <path
              d="m63.508 41.997 2.049 -1.024v-2.049z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m51.216 48.143 2.049 -1.024v-0.922c0 -0.512 -0.512 -0.819 -1.024 -0.615l-1.024 0.512z"
              fill="#fff"
            />
            <path
              cx={51.2}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 107.723)"
              d="M53.265 46.607A0.819 0.512 0 0 1 52.446 47.119A0.819 0.512 0 0 1 51.626 46.607A0.819 0.512 0 0 1 53.265 46.607z"
            />
            <path
              cx={50.7}
              cy={45.5}
              fill="#2d3134"
              opacity={0.3}
              rx={0.8}
              ry={0.5}
              transform="scale(-1) rotate(-50.856 -95.794 106.671)"
              d="M52.753 46.607A0.819 0.512 0 0 1 51.933 47.119A0.819 0.512 0 0 1 51.114 46.607A0.819 0.512 0 0 1 52.753 46.607z"
            />
            <path
              d="m51.216 48.143 2.049 -1.024 -2.049 -1.024z"
              fill="#fff"
              opacity={0.3}
            />
            <path
              d="m49.168 35.851 -6.146 -3.073v11.575c0 0.307 0.41 0.512 0.717 0.307 1.229 -1.024 3.38 -0.307 4.917 1.536 0.307 0.307 0.512 0.615 0.615 1.024L49.168 47.119v2.049l2.049 1.024v-8.195z"
              opacity={0.39}
            />
            <path
              d="m63.508 28.681 -14.341 7.17 2.049 6.146v8.195l14.341 -7.17v-8.195z"
              opacity={0.06}
            />
          </g>
        </g>
        <g id="i55" className="lvl-1" transform="translate(152 424)">
          <g>
            <g>
              <text
                transform="scale(1.2649 .6324) rotate(45 -23.488 29.76)"
                style={{ fontFamily: "Georgia", fontSize: 24, fill: "#ffffff" }}
              >
                <tspan x={0} y={0}>
                  {"shipping"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="i56" className="lvl-1" transform="translate(160 352)">
          <g>
            <g>
              <path
                fill="#825012"
                d="m31.959 19.974 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V24.584l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V20.487l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V24.584l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="20.4,24.5 21.8,23.8 20.4,23.1  "
                d="M20.896 25.096L22.33 24.379L20.896 23.662Z"
              />
              <path
                opacity={0.11}
                points="31.2,22.3 30.2,21.8 30.2,21.4 31.2,20.9  "
                d="M31.959 22.843L30.935 22.33L30.935 21.921L31.959 21.408Z"
              />
              <path
                opacity={0.11}
                points="27.6,24.1 26.6,23.6 26.6,23.2 27.6,22.7  "
                d="M28.271 24.686L27.247 24.174L27.247 23.764L28.271 23.252Z"
              />
              <path
                opacity={0.11}
                points="29.4,20.4 29,20.2 29.4,20 29.8,20.2  "
                d="M30.115 20.896L29.706 20.691L30.115 20.487L30.525 20.691Z"
              />
              <path
                opacity={0.11}
                points="27.6,19.1 26.6,19.6 26.6,20 28,19.3  "
                d="M28.271 19.565L27.247 20.077L27.247 20.487L28.681 19.77Z"
              />
              <path
                opacity={0.11}
                points="25.8,18.6 25.4,18.4 25.8,18.2 26.2,18.4  "
                d="M26.428 19.052L26.018 18.848L26.428 18.643L26.837 18.848Z"
              />
              <path
                opacity={0.11}
                points="24,17.3 23,17.8 23,18.2 24.4,17.5  "
                d="M24.584 17.721L23.56 18.233L23.56 18.643L24.994 17.926Z"
              />
              <path
                opacity={0.11}
                points="25.8,22.2 25.4,22 25.8,21.8 26.2,22  "
                d="M26.428 22.74L26.018 22.535L26.428 22.33L26.837 22.535Z"
              />
              <path
                opacity={0.11}
                points="24,21.3 23.6,21.1 24,20.9 24.4,21.1  "
                d="M24.584 21.818L24.174 21.613L24.584 21.408L24.994 21.613Z"
              />
              <path
                opacity={0.11}
                points="22.2,20.4 21.8,20.2 22.2,20 22.6,20.2  "
                d="M22.74 20.896L22.33 20.691L22.74 20.487L23.15 20.691Z"
              />
              <path
                opacity={0.11}
                points="20.4,19.1 19.4,19.6 19.4,20 20.8,19.3  "
                d="M20.896 19.565L19.872 20.077L19.872 20.487L21.306 19.77Z"
              />
              <path
                opacity={0.29}
                d="M24.584 24.686v2.254l8.399 -4.2V20.487L24.584 24.686zm3.688 0L25.608 26.018V24.584l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="22.2,23.6 30.4,19.5 30.4,19.1 22.2,23.2  "
                d="M22.74 24.174L31.14 19.974L31.14 19.565L22.74 23.764Z"
              />
              <path
                opacity={0.29}
                points="20.4,22.7 28.6,18.6 28.6,18.2 20.4,22.3  "
                d="M20.896 23.252L29.296 19.052L29.296 18.643L20.896 22.843Z"
              />
              <path
                opacity={0.29}
                points="18.6,21.8 26.8,17.7 26.8,17.3 18.6,21.4  "
                d="M19.052 22.33L27.452 18.131L27.452 17.721L19.052 21.921Z"
              />
              <path
                opacity={0.11}
                points="23,23.6 23,24 22.2,23.6 22.2,23.2 21.2,22.7 21.2,23.1 20.4,22.7 20.4,22.3 19.4,21.8 19.4,22.2    18.6,21.8 18.6,21.4 17.6,20.9 17.6,21.3 16.8,20.9 16.8,20.5 15.8,20 15.8,22.2 16.8,22.7 16.8,21.3 19.4,22.6 19.4,24 20.4,24.5    20.4,23.1 23,24.4 23,25.8 24,26.3 24,24.1  "
                d="M23.56 24.174L23.56 24.584L22.74 24.174L22.74 23.764L21.716 23.252L21.716 23.662L20.896 23.252L20.896 22.843L19.872 22.33L19.872 22.74L19.052 22.33L19.052 21.921L18.028 21.408L18.028 21.818L17.209 21.408L17.209 20.999L16.184 20.487L16.184 22.74L17.209 23.252L17.209 21.818L19.872 23.15L19.872 24.584L20.896 25.096L20.896 23.662L23.56 24.994L23.56 26.428L24.584 26.94L24.584 24.686Z"
              />
              <path
                opacity={0.29}
                points="16.8,20.9 25,16.8 25,16.4 16.8,20.5  "
                d="M17.209 21.408L25.608 17.209L25.608 16.799L17.209 20.999Z"
              />
              <path
                opacity={0.29}
                points="16.8,22.7 18.2,22 16.8,21.3  "
                d="M17.209 23.252L18.643 22.535L17.209 21.818Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m23.764 24.072 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512L7.99 24.584v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V28.681l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V24.584l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V28.681l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="12.4,28.5 13.8,27.8 12.4,27.1  "
                d="M12.702 29.193L14.136 28.476L12.702 27.759Z"
              />
              <path
                opacity={0.11}
                points="23.2,26.3 22.2,25.8 22.2,25.4 23.2,24.9  "
                d="M23.764 26.94L22.74 26.428L22.74 26.018L23.764 25.506Z"
              />
              <path
                opacity={0.11}
                points="19.6,28.1 18.6,27.6 18.6,27.2 19.6,26.7  "
                d="M20.077 28.784L19.052 28.271L19.052 27.862L20.077 27.35Z"
              />
              <path
                opacity={0.11}
                points="21.4,24.4 21,24.2 21.4,24 21.8,24.2  "
                d="M21.921 24.994L21.511 24.789L21.921 24.584L22.33 24.789Z"
              />
              <path
                opacity={0.11}
                points="19.6,23.1 18.6,23.6 18.6,24 20,23.3  "
                d="M20.077 23.662L19.052 24.174L19.052 24.584L20.487 23.867Z"
              />
              <path
                opacity={0.11}
                points="17.8,22.6 17.4,22.4 17.8,22.2 18.2,22.4  "
                d="M18.233 23.15L17.823 22.945L18.233 22.74L18.643 22.945Z"
              />
              <path
                opacity={0.11}
                points="16,21.3 15,21.8 15,22.2 16.4,21.5  "
                d="M16.389 21.818L15.365 22.33L15.365 22.74L16.799 22.023Z"
              />
              <path
                opacity={0.11}
                points="17.8,26.2 17.4,26 17.8,25.8 18.2,26  "
                d="M18.233 26.837L17.823 26.633L18.233 26.428L18.643 26.633Z"
              />
              <path
                opacity={0.11}
                points="16,25.3 15.6,25.1 16,24.9 16.4,25.1  "
                d="M16.389 25.915L15.98 25.711L16.389 25.506L16.799 25.711Z"
              />
              <path
                opacity={0.11}
                points="14.2,24.4 13.8,24.2 14.2,24 14.6,24.2  "
                d="M14.545 24.994L14.136 24.789L14.545 24.584L14.955 24.789Z"
              />
              <path
                opacity={0.11}
                points="12.4,23.1 11.4,23.6 11.4,24 12.8,23.3  "
                d="M12.702 23.662L11.677 24.174L11.677 24.584L13.111 23.867Z"
              />
              <path
                opacity={0.29}
                d="M16.389 28.784v2.254l8.399 -4.2V24.584L16.389 28.784zm3.688 0L17.414 30.115V28.681l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="14.2,27.6 22.4,23.5 22.4,23.1 14.2,27.2  "
                d="M14.545 28.271L22.945 24.072L22.945 23.662L14.545 27.862Z"
              />
              <path
                opacity={0.29}
                points="12.4,26.7 20.6,22.6 20.6,22.2 12.4,26.3  "
                d="M12.702 27.35L21.101 23.15L21.101 22.74L12.702 26.94Z"
              />
              <path
                opacity={0.29}
                points="10.6,25.8 18.8,21.7 18.8,21.3 10.6,25.4  "
                d="M10.858 26.428L19.257 22.228L19.257 21.818L10.858 26.018Z"
              />
              <path
                opacity={0.11}
                points="15,27.6 15,28 14.2,27.6 14.2,27.2 13.2,26.7 13.2,27.1 12.4,26.7 12.4,26.3 11.4,25.8 11.4,26.2    10.6,25.8 10.6,25.4 9.6,24.9 9.6,25.3 8.8,24.9 8.8,24.5 7.8,24 7.8,26.2 8.8,26.7 8.8,25.3 11.4,26.6 11.4,28 12.4,28.5    12.4,27.1 15,28.4 15,29.8 16,30.3 16,28.1  "
                d="M15.365 28.271L15.365 28.681L14.545 28.271L14.545 27.862L13.521 27.35L13.521 27.759L12.702 27.35L12.702 26.94L11.677 26.428L11.677 26.837L10.858 26.428L10.858 26.018L9.834 25.506L9.834 25.915L9.014 25.506L9.014 25.096L7.99 24.584L7.99 26.837L9.014 27.35L9.014 25.915L11.677 27.247L11.677 28.681L12.702 29.193L12.702 27.759L15.365 29.091L15.365 30.525L16.389 31.037L16.389 28.784Z"
              />
              <path
                opacity={0.29}
                points="8.8,24.9 17,20.8 17,20.4 8.8,24.5  "
                d="M9.014 25.506L17.414 21.306L17.414 20.896L9.014 25.096Z"
              />
              <path
                opacity={0.29}
                points="8.8,26.7 10.2,26 8.8,25.3  "
                d="M9.014 27.35L10.448 26.633L9.014 25.915Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m40.154 24.072 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V28.681l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V24.584l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V28.681l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="28.4,28.5 29.8,27.8 28.4,27.1  "
                d="M29.091 29.193L30.525 28.476L29.091 27.759Z"
              />
              <path
                opacity={0.11}
                points="39.2,26.3 38.2,25.8 38.2,25.4 39.2,24.9  "
                d="M40.154 26.94L39.129 26.428L39.129 26.018L40.154 25.506Z"
              />
              <path
                opacity={0.11}
                points="35.6,28.1 34.6,27.6 34.6,27.2 35.6,26.7  "
                d="M36.466 28.784L35.442 28.271L35.442 27.862L36.466 27.35Z"
              />
              <path
                opacity={0.11}
                points="37.4,24.4 37,24.2 37.4,24 37.8,24.2  "
                d="M38.31 24.994L37.9 24.789L38.31 24.584L38.72 24.789Z"
              />
              <path
                opacity={0.11}
                points="35.6,23.1 34.6,23.6 34.6,24 36,23.3  "
                d="M36.466 23.662L35.442 24.174L35.442 24.584L36.876 23.867Z"
              />
              <path
                opacity={0.11}
                points="33.8,22.6 33.4,22.4 33.8,22.2 34.2,22.4  "
                d="M34.622 23.15L34.213 22.945L34.622 22.74L35.032 22.945Z"
              />
              <path
                opacity={0.11}
                points="32,21.3 31,21.8 31,22.2 32.4,21.5  "
                d="M32.778 21.818L31.754 22.33L31.754 22.74L33.188 22.023Z"
              />
              <path
                opacity={0.11}
                points="33.8,26.2 33.4,26 33.8,25.8 34.2,26  "
                d="M34.622 26.837L34.213 26.633L34.622 26.428L35.032 26.633Z"
              />
              <path
                opacity={0.11}
                points="32,25.3 31.6,25.1 32,24.9 32.4,25.1  "
                d="M32.778 25.915L32.369 25.711L32.778 25.506L33.188 25.711Z"
              />
              <path
                opacity={0.11}
                points="30.2,24.4 29.8,24.2 30.2,24 30.6,24.2  "
                d="M30.935 24.994L30.525 24.789L30.935 24.584L31.344 24.789Z"
              />
              <path
                opacity={0.11}
                points="28.4,23.1 27.4,23.6 27.4,24 28.8,23.3  "
                d="M29.091 23.662L28.067 24.174L28.067 24.584L29.501 23.867Z"
              />
              <path
                opacity={0.29}
                d="M32.778 28.784v2.254l8.399 -4.2V24.584L32.778 28.784zm3.688 0L33.803 30.115V28.681l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="30.2,27.6 38.4,23.5 38.4,23.1 30.2,27.2  "
                d="M30.935 28.271L39.334 24.072L39.334 23.662L30.935 27.862Z"
              />
              <path
                opacity={0.29}
                points="28.4,26.7 36.6,22.6 36.6,22.2 28.4,26.3  "
                d="M29.091 27.35L37.49 23.15L37.49 22.74L29.091 26.94Z"
              />
              <path
                opacity={0.29}
                points="26.6,25.8 34.8,21.7 34.8,21.3 26.6,25.4  "
                d="M27.247 26.428L35.647 22.228L35.647 21.818L27.247 26.018Z"
              />
              <path
                opacity={0.11}
                points="31,27.6 31,28 30.2,27.6 30.2,27.2 29.2,26.7 29.2,27.1 28.4,26.7 28.4,26.3 27.4,25.8 27.4,26.2    26.6,25.8 26.6,25.4 25.6,24.9 25.6,25.3 24.8,24.9 24.8,24.5 23.8,24 23.8,26.2 24.8,26.7 24.8,25.3 27.4,26.6 27.4,28 28.4,28.5    28.4,27.1 31,28.4 31,29.8 32,30.3 32,28.1  "
                d="M31.754 28.271L31.754 28.681L30.935 28.271L30.935 27.862L29.91 27.35L29.91 27.759L29.091 27.35L29.091 26.94L28.067 26.428L28.067 26.837L27.247 26.428L27.247 26.018L26.223 25.506L26.223 25.915L25.403 25.506L25.403 25.096L24.379 24.584L24.379 26.837L25.403 27.35L25.403 25.915L28.067 27.247L28.067 28.681L29.091 29.193L29.091 27.759L31.754 29.091L31.754 30.525L32.778 31.037L32.778 28.784Z"
              />
              <path
                opacity={0.29}
                points="24.8,24.9 33,20.8 33,20.4 24.8,24.5  "
                d="M25.403 25.506L33.803 21.306L33.803 20.896L25.403 25.096Z"
              />
              <path
                opacity={0.29}
                points="24.8,26.7 26.2,26 24.8,25.3  "
                d="M25.403 27.35L26.837 26.633L25.403 25.915Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m31.959 28.169 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V32.778l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V28.681l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V32.778l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="20.4,32.5 21.8,31.8 20.4,31.1  "
                d="M20.896 33.291L22.33 32.574L20.896 31.857Z"
              />
              <path
                opacity={0.11}
                points="31.2,30.3 30.2,29.8 30.2,29.4 31.2,28.9  "
                d="M31.959 31.037L30.935 30.525L30.935 30.115L31.959 29.603Z"
              />
              <path
                opacity={0.11}
                points="27.6,32.1 26.6,31.6 26.6,31.2 27.6,30.7  "
                d="M28.271 32.881L27.247 32.369L27.247 31.959L28.271 31.447Z"
              />
              <path
                opacity={0.11}
                points="29.4,28.4 29,28.2 29.4,28 29.8,28.2  "
                d="M30.115 29.091L29.706 28.886L30.115 28.681L30.525 28.886Z"
              />
              <path
                opacity={0.11}
                points="27.6,27.1 26.6,27.6 26.6,28 28,27.3  "
                d="M28.271 27.759L27.247 28.271L27.247 28.681L28.681 27.964Z"
              />
              <path
                opacity={0.11}
                points="25.8,26.6 25.4,26.4 25.8,26.2 26.2,26.4  "
                d="M26.428 27.247L26.018 27.042L26.428 26.837L26.837 27.042Z"
              />
              <path
                opacity={0.11}
                points="24,25.3 23,25.8 23,26.2 24.4,25.5  "
                d="M24.584 25.915L23.56 26.428L23.56 26.837L24.994 26.12Z"
              />
              <path
                opacity={0.11}
                points="25.8,30.2 25.4,30 25.8,29.8 26.2,30  "
                d="M26.428 30.935L26.018 30.73L26.428 30.525L26.837 30.73Z"
              />
              <path
                opacity={0.11}
                points="24,29.3 23.6,29.1 24,28.9 24.4,29.1  "
                d="M24.584 30.013L24.174 29.808L24.584 29.603L24.994 29.808Z"
              />
              <path
                opacity={0.11}
                points="22.2,28.4 21.8,28.2 22.2,28 22.6,28.2  "
                d="M22.74 29.091L22.33 28.886L22.74 28.681L23.15 28.886Z"
              />
              <path
                opacity={0.11}
                points="20.4,27.1 19.4,27.6 19.4,28 20.8,27.3  "
                d="M20.896 27.759L19.872 28.271L19.872 28.681L21.306 27.964Z"
              />
              <path
                opacity={0.29}
                d="M24.584 32.881v2.254l8.399 -4.2V28.681L24.584 32.881zm3.688 0L25.608 34.213V32.778l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="22.2,31.6 30.4,27.5 30.4,27.1 22.2,31.2  "
                d="M22.74 32.369L31.14 28.169L31.14 27.759L22.74 31.959Z"
              />
              <path
                opacity={0.29}
                points="20.4,30.7 28.6,26.6 28.6,26.2 20.4,30.3  "
                d="M20.896 31.447L29.296 27.247L29.296 26.837L20.896 31.037Z"
              />
              <path
                opacity={0.29}
                points="18.6,29.8 26.8,25.7 26.8,25.3 18.6,29.4  "
                d="M19.052 30.525L27.452 26.325L27.452 25.915L19.052 30.115Z"
              />
              <path
                opacity={0.11}
                points="23,31.6 23,32 22.2,31.6 22.2,31.2 21.2,30.7 21.2,31.1 20.4,30.7 20.4,30.3 19.4,29.8 19.4,30.2    18.6,29.8 18.6,29.4 17.6,28.9 17.6,29.3 16.8,28.9 16.8,28.5 15.8,28 15.8,30.2 16.8,30.7 16.8,29.3 19.4,30.6 19.4,32 20.4,32.5    20.4,31.1 23,32.4 23,33.8 24,34.3 24,32.1  "
                d="M23.56 32.369L23.56 32.778L22.74 32.369L22.74 31.959L21.716 31.447L21.716 31.857L20.896 31.447L20.896 31.037L19.872 30.525L19.872 30.935L19.052 30.525L19.052 30.115L18.028 29.603L18.028 30.013L17.209 29.603L17.209 29.193L16.184 28.681L16.184 30.935L17.209 31.447L17.209 30.013L19.872 31.344L19.872 32.778L20.896 33.291L20.896 31.857L23.56 33.188L23.56 34.622L24.584 35.134L24.584 32.881Z"
              />
              <path
                opacity={0.29}
                points="16.8,28.9 25,24.8 25,24.4 16.8,28.5  "
                d="M17.209 29.603L25.608 25.403L25.608 24.994L17.209 29.193Z"
              />
              <path
                opacity={0.29}
                points="16.8,30.7 18.2,30 16.8,29.3  "
                d="M17.209 31.447L18.643 30.73L17.209 30.013Z"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFCC00"
                  points="8.6,16.5 8.6,23.9 16,27.6 23.4,23.9 23.4,16.5 16,12.8   "
                  d="M8.809 16.901L8.809 24.481L16.389 28.271L23.969 24.481L23.969 16.901L16.389 13.111Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.6 8.6,23.9 8.6,16.5 16,20.2   "
                  d="M16.389 28.271L8.809 24.481L8.809 16.901L16.389 20.691Z"
                />
                <path
                  opacity={0.3}
                  points="13.2,14.2 11.4,15.1 18.8,18.8 18.8,22.4 20.6,21.5 20.6,17.9   "
                  d="M13.521 14.545L11.677 15.467L19.257 19.257L19.257 22.945L21.101 22.023L21.101 18.335Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.6 23.4,23.9 23.4,16.5 16,20.2   "
                  d="M16.389 28.271L23.969 24.481L23.969 16.901L16.389 20.691Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="24.6,16.5 24.6,23.9 32,27.6 39.4,23.9 39.4,16.5 32,12.8   "
                  d="M25.198 16.901L25.198 24.481L32.778 28.271L40.359 24.481L40.359 16.901L32.778 13.111Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.6 24.6,23.9 24.6,16.5 32,20.2   "
                  d="M32.778 28.271L25.198 24.481L25.198 16.901L32.778 20.691Z"
                />
                <path
                  opacity={0.3}
                  points="29.2,14.2 27.4,15.1 34.8,18.8 34.8,22.4 36.6,21.5 36.6,17.9   "
                  d="M29.91 14.545L28.067 15.467L35.647 19.257L35.647 22.945L37.49 22.023L37.49 18.335Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.6 39.4,23.9 39.4,16.5 32,20.2   "
                  d="M32.778 28.271L40.359 24.481L40.359 16.901L32.778 20.691Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="16.6,20.5 16.6,27.9 24,31.6 31.4,27.9 31.4,20.5 24,16.8   "
                  d="M17.004 20.999L17.004 28.579L24.584 32.369L32.164 28.579L32.164 20.999L24.584 17.209Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.6 16.6,27.9 16.6,20.5 24,24.2   "
                  d="M24.584 32.369L17.004 28.579L17.004 20.999L24.584 24.789Z"
                />
                <path
                  opacity={0.3}
                  points="21.2,18.2 19.4,19.1 26.8,22.8 26.8,26.4 28.6,25.5 28.6,21.9   "
                  d="M21.716 18.643L19.872 19.565L27.452 23.355L27.452 27.042L29.296 26.12L29.296 22.433Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.6 31.4,27.9 31.4,20.5 24,24.2   "
                  d="M24.584 32.369L32.164 28.579L32.164 20.999L24.584 24.789Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="16.6,4.5 16.6,11.9 24,15.6 31.4,11.9 31.4,4.5 24,0.8   "
                  d="M17.004 4.609L17.004 12.19L24.584 15.98L32.164 12.19L32.164 4.609L24.584 0.819Z"
                />
                <path
                  opacity={0.11}
                  points="24,15.6 16.6,11.9 16.6,4.5 24,8.2   "
                  d="M24.584 15.98L17.004 12.19L17.004 4.609L24.584 8.399Z"
                />
                <path
                  opacity={0.3}
                  points="21.2,2.2 19.4,3.1 26.8,6.8 26.8,10.4 28.6,9.5 28.6,5.9   "
                  d="M21.716 2.254L19.872 3.175L27.452 6.965L27.452 10.653L29.296 9.731L29.296 6.044Z"
                />
                <path
                  opacity={0.29}
                  points="24,15.6 31.4,11.9 31.4,4.5 24,8.2   "
                  d="M24.584 15.98L32.164 12.19L32.164 4.609L24.584 8.399Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="8.6,8.5 8.6,15.9 16,19.6 23.4,15.9 23.4,8.5 16,4.8   "
                  d="M8.809 8.707L8.809 16.287L16.389 20.077L23.969 16.287L23.969 8.707L16.389 4.917Z"
                />
                <path
                  opacity={0.11}
                  points="16,19.6 8.6,15.9 8.6,8.5 16,12.2   "
                  d="M16.389 20.077L8.809 16.287L8.809 8.707L16.389 12.497Z"
                />
                <path
                  opacity={0.3}
                  points="13.2,6.2 11.4,7.1 18.8,10.8 18.8,14.4 20.6,13.5 20.6,9.9   "
                  d="M13.521 6.351L11.677 7.273L19.257 11.063L19.257 14.75L21.101 13.828L21.101 10.141Z"
                />
                <path
                  opacity={0.29}
                  points="16,19.6 23.4,15.9 23.4,8.5 16,12.2   "
                  d="M16.389 20.077L23.969 16.287L23.969 8.707L16.389 12.497Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="24.6,8.5 24.6,15.9 32,19.6 39.4,15.9 39.4,8.5 32,4.8   "
                  d="M25.198 8.707L25.198 16.287L32.778 20.077L40.359 16.287L40.359 8.707L32.778 4.917Z"
                />
                <path
                  opacity={0.11}
                  points="32,19.6 24.6,15.9 24.6,8.5 32,12.2   "
                  d="M32.778 20.077L25.198 16.287L25.198 8.707L32.778 12.497Z"
                />
                <path
                  opacity={0.3}
                  points="29.2,6.2 27.4,7.1 34.8,10.8 34.8,14.4 36.6,13.5 36.6,9.9   "
                  d="M29.91 6.351L28.067 7.273L35.647 11.063L35.647 14.75L37.49 13.828L37.49 10.141Z"
                />
                <path
                  opacity={0.29}
                  points="32,19.6 39.4,15.9 39.4,8.5 32,12.2   "
                  d="M32.778 20.077L40.359 16.287L40.359 8.707L32.778 12.497Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="16.6,12.5 16.6,19.9 24,23.6 31.4,19.9 31.4,12.5 24,8.8   "
                  d="M17.004 12.804L17.004 20.384L24.584 24.174L32.164 20.384L32.164 12.804L24.584 9.014Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.6 16.6,19.9 16.6,12.5 24,16.2   "
                  d="M24.584 24.174L17.004 20.384L17.004 12.804L24.584 16.594Z"
                />
                <path
                  opacity={0.3}
                  points="21.2,10.2 19.4,11.1 26.8,14.8 26.8,18.4 28.6,17.5 28.6,13.9   "
                  d="M21.716 10.448L19.872 11.37L27.452 15.16L27.452 18.848L29.296 17.926L29.296 14.238Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.6 31.4,19.9 31.4,12.5 24,16.2   "
                  d="M24.584 24.174L32.164 20.384L32.164 12.804L24.584 16.594Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="i57" className="lvl-1" transform="translate(144 368)">
          <g>
            <g>
              <path
                fill="#825012"
                d="m31.959 11.78 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V16.389l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V12.292l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V16.389l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="20.4,16.5 21.8,15.8 20.4,15.1  "
                d="M20.896 16.901L22.33 16.184L20.896 15.467Z"
              />
              <path
                opacity={0.11}
                points="31.2,14.3 30.2,13.8 30.2,13.4 31.2,12.9  "
                d="M31.959 14.648L30.935 14.136L30.935 13.726L31.959 13.214Z"
              />
              <path
                opacity={0.11}
                points="27.6,16.1 26.6,15.6 26.6,15.2 27.6,14.7  "
                d="M28.271 16.492L27.247 15.98L27.247 15.57L28.271 15.058Z"
              />
              <path
                opacity={0.11}
                points="29.4,12.4 29,12.2 29.4,12 29.8,12.2  "
                d="M30.115 12.702L29.706 12.497L30.115 12.292L30.525 12.497Z"
              />
              <path
                opacity={0.11}
                points="27.6,11.1 26.6,11.6 26.6,12 28,11.3  "
                d="M28.271 11.37L27.247 11.882L27.247 12.292L28.681 11.575Z"
              />
              <path
                opacity={0.11}
                points="25.8,10.6 25.4,10.4 25.8,10.2 26.2,10.4  "
                d="M26.428 10.858L26.018 10.653L26.428 10.448L26.837 10.653Z"
              />
              <path
                opacity={0.11}
                points="24,9.3 23,9.8 23,10.2 24.4,9.5  "
                d="M24.584 9.526L23.56 10.038L23.56 10.448L24.994 9.731Z"
              />
              <path
                opacity={0.11}
                points="25.8,14.2 25.4,14 25.8,13.8 26.2,14  "
                d="M26.428 14.545L26.018 14.341L26.428 14.136L26.837 14.341Z"
              />
              <path
                opacity={0.11}
                points="24,13.3 23.6,13.1 24,12.9 24.4,13.1  "
                d="M24.584 13.624L24.174 13.419L24.584 13.214L24.994 13.419Z"
              />
              <path
                opacity={0.11}
                points="22.2,12.4 21.8,12.2 22.2,12 22.6,12.2  "
                d="M22.74 12.702L22.33 12.497L22.74 12.292L23.15 12.497Z"
              />
              <path
                opacity={0.11}
                points="20.4,11.1 19.4,11.6 19.4,12 20.8,11.3  "
                d="M20.896 11.37L19.872 11.882L19.872 12.292L21.306 11.575Z"
              />
              <path
                opacity={0.29}
                d="M24.584 16.492v2.254l8.399 -4.2V12.292L24.584 16.492zm3.688 0L25.608 17.823V16.389l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="22.2,15.6 30.4,11.5 30.4,11.1 22.2,15.2  "
                d="M22.74 15.98L31.14 11.78L31.14 11.37L22.74 15.57Z"
              />
              <path
                opacity={0.29}
                points="20.4,14.7 28.6,10.6 28.6,10.2 20.4,14.3  "
                d="M20.896 15.058L29.296 10.858L29.296 10.448L20.896 14.648Z"
              />
              <path
                opacity={0.29}
                points="18.6,13.8 26.8,9.7 26.8,9.3 18.6,13.4  "
                d="M19.052 14.136L27.452 9.936L27.452 9.526L19.052 13.726Z"
              />
              <path
                opacity={0.11}
                points="23,15.6 23,16 22.2,15.6 22.2,15.2 21.2,14.7 21.2,15.1 20.4,14.7 20.4,14.3 19.4,13.8 19.4,14.2    18.6,13.8 18.6,13.4 17.6,12.9 17.6,13.3 16.8,12.9 16.8,12.5 15.8,12 15.8,14.2 16.8,14.7 16.8,13.3 19.4,14.6 19.4,16 20.4,16.5    20.4,15.1 23,16.4 23,17.8 24,18.3 24,16.1  "
                d="M23.56 15.98L23.56 16.389L22.74 15.98L22.74 15.57L21.716 15.058L21.716 15.467L20.896 15.058L20.896 14.648L19.872 14.136L19.872 14.545L19.052 14.136L19.052 13.726L18.028 13.214L18.028 13.624L17.209 13.214L17.209 12.804L16.184 12.292L16.184 14.545L17.209 15.058L17.209 13.624L19.872 14.955L19.872 16.389L20.896 16.901L20.896 15.467L23.56 16.799L23.56 18.233L24.584 18.745L24.584 16.492Z"
              />
              <path
                opacity={0.29}
                points="16.8,12.9 25,8.8 25,8.4 16.8,12.5  "
                d="M17.209 13.214L25.608 9.014L25.608 8.604L17.209 12.804Z"
              />
              <path
                opacity={0.29}
                points="16.8,14.7 18.2,14 16.8,13.3  "
                d="M17.209 15.058L18.643 14.341L17.209 13.624Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m23.764 15.877 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512L7.99 16.389v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V20.487l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V16.389l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V20.487l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="12.4,20.5 13.8,19.8 12.4,19.1  "
                d="M12.702 20.999L14.136 20.282L12.702 19.565Z"
              />
              <path
                opacity={0.11}
                points="23.2,18.3 22.2,17.8 22.2,17.4 23.2,16.9  "
                d="M23.764 18.745L22.74 18.233L22.74 17.823L23.764 17.311Z"
              />
              <path
                opacity={0.11}
                points="19.6,20.1 18.6,19.6 18.6,19.2 19.6,18.7  "
                d="M20.077 20.589L19.052 20.077L19.052 19.667L20.077 19.155Z"
              />
              <path
                opacity={0.11}
                points="21.4,16.4 21,16.2 21.4,16 21.8,16.2  "
                d="M21.921 16.799L21.511 16.594L21.921 16.389L22.33 16.594Z"
              />
              <path
                opacity={0.11}
                points="19.6,15.1 18.6,15.6 18.6,16 20,15.3  "
                d="M20.077 15.467L19.052 15.98L19.052 16.389L20.487 15.672Z"
              />
              <path
                opacity={0.11}
                points="17.8,14.6 17.4,14.4 17.8,14.2 18.2,14.4  "
                d="M18.233 14.955L17.823 14.75L18.233 14.545L18.643 14.75Z"
              />
              <path
                opacity={0.11}
                points="16,13.3 15,13.8 15,14.2 16.4,13.5  "
                d="M16.389 13.624L15.365 14.136L15.365 14.545L16.799 13.828Z"
              />
              <path
                opacity={0.11}
                points="17.8,18.2 17.4,18 17.8,17.8 18.2,18  "
                d="M18.233 18.643L17.823 18.438L18.233 18.233L18.643 18.438Z"
              />
              <path
                opacity={0.11}
                points="16,17.3 15.6,17.1 16,16.9 16.4,17.1  "
                d="M16.389 17.721L15.98 17.516L16.389 17.311L16.799 17.516Z"
              />
              <path
                opacity={0.11}
                points="14.2,16.4 13.8,16.2 14.2,16 14.6,16.2  "
                d="M14.545 16.799L14.136 16.594L14.545 16.389L14.955 16.594Z"
              />
              <path
                opacity={0.11}
                points="12.4,15.1 11.4,15.6 11.4,16 12.8,15.3  "
                d="M12.702 15.467L11.677 15.98L11.677 16.389L13.111 15.672Z"
              />
              <path
                opacity={0.29}
                d="M16.389 20.589v2.254l8.399 -4.2V16.389L16.389 20.589zm3.688 0L17.414 21.921V20.487l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="14.2,19.6 22.4,15.5 22.4,15.1 14.2,19.2  "
                d="M14.545 20.077L22.945 15.877L22.945 15.467L14.545 19.667Z"
              />
              <path
                opacity={0.29}
                points="12.4,18.7 20.6,14.6 20.6,14.2 12.4,18.3  "
                d="M12.702 19.155L21.101 14.955L21.101 14.545L12.702 18.745Z"
              />
              <path
                opacity={0.29}
                points="10.6,17.8 18.8,13.7 18.8,13.3 10.6,17.4  "
                d="M10.858 18.233L19.257 14.033L19.257 13.624L10.858 17.823Z"
              />
              <path
                opacity={0.11}
                points="15,19.6 15,20 14.2,19.6 14.2,19.2 13.2,18.7 13.2,19.1 12.4,18.7 12.4,18.3 11.4,17.8 11.4,18.2    10.6,17.8 10.6,17.4 9.6,16.9 9.6,17.3 8.8,16.9 8.8,16.5 7.8,16 7.8,18.2 8.8,18.7 8.8,17.3 11.4,18.6 11.4,20 12.4,20.5    12.4,19.1 15,20.4 15,21.8 16,22.3 16,20.1  "
                d="M15.365 20.077L15.365 20.487L14.545 20.077L14.545 19.667L13.521 19.155L13.521 19.565L12.702 19.155L12.702 18.745L11.677 18.233L11.677 18.643L10.858 18.233L10.858 17.823L9.834 17.311L9.834 17.721L9.014 17.311L9.014 16.901L7.99 16.389L7.99 18.643L9.014 19.155L9.014 17.721L11.677 19.052L11.677 20.487L12.702 20.999L12.702 19.565L15.365 20.896L15.365 22.33L16.389 22.843L16.389 20.589Z"
              />
              <path
                opacity={0.29}
                points="8.8,16.9 17,12.8 17,12.4 8.8,16.5  "
                d="M9.014 17.311L17.414 13.111L17.414 12.702L9.014 16.901Z"
              />
              <path
                opacity={0.29}
                points="8.8,18.7 10.2,18 8.8,17.3  "
                d="M9.014 19.155L10.448 18.438L9.014 17.721Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m40.154 15.877 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V20.487l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V16.389l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V20.487l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="28.4,20.5 29.8,19.8 28.4,19.1  "
                d="M29.091 20.999L30.525 20.282L29.091 19.565Z"
              />
              <path
                opacity={0.11}
                points="39.2,18.3 38.2,17.8 38.2,17.4 39.2,16.9  "
                d="M40.154 18.745L39.129 18.233L39.129 17.823L40.154 17.311Z"
              />
              <path
                opacity={0.11}
                points="35.6,20.1 34.6,19.6 34.6,19.2 35.6,18.7  "
                d="M36.466 20.589L35.442 20.077L35.442 19.667L36.466 19.155Z"
              />
              <path
                opacity={0.11}
                points="37.4,16.4 37,16.2 37.4,16 37.8,16.2  "
                d="M38.31 16.799L37.9 16.594L38.31 16.389L38.72 16.594Z"
              />
              <path
                opacity={0.11}
                points="35.6,15.1 34.6,15.6 34.6,16 36,15.3  "
                d="M36.466 15.467L35.442 15.98L35.442 16.389L36.876 15.672Z"
              />
              <path
                opacity={0.11}
                points="33.8,14.6 33.4,14.4 33.8,14.2 34.2,14.4  "
                d="M34.622 14.955L34.213 14.75L34.622 14.545L35.032 14.75Z"
              />
              <path
                opacity={0.11}
                points="32,13.3 31,13.8 31,14.2 32.4,13.5  "
                d="M32.778 13.624L31.754 14.136L31.754 14.545L33.188 13.828Z"
              />
              <path
                opacity={0.11}
                points="33.8,18.2 33.4,18 33.8,17.8 34.2,18  "
                d="M34.622 18.643L34.213 18.438L34.622 18.233L35.032 18.438Z"
              />
              <path
                opacity={0.11}
                points="32,17.3 31.6,17.1 32,16.9 32.4,17.1  "
                d="M32.778 17.721L32.369 17.516L32.778 17.311L33.188 17.516Z"
              />
              <path
                opacity={0.11}
                points="30.2,16.4 29.8,16.2 30.2,16 30.6,16.2  "
                d="M30.935 16.799L30.525 16.594L30.935 16.389L31.344 16.594Z"
              />
              <path
                opacity={0.11}
                points="28.4,15.1 27.4,15.6 27.4,16 28.8,15.3  "
                d="M29.091 15.467L28.067 15.98L28.067 16.389L29.501 15.672Z"
              />
              <path
                opacity={0.29}
                d="M32.778 20.589v2.254l8.399 -4.2V16.389L32.778 20.589zm3.688 0L33.803 21.921V20.487l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="30.2,19.6 38.4,15.5 38.4,15.1 30.2,19.2  "
                d="M30.935 20.077L39.334 15.877L39.334 15.467L30.935 19.667Z"
              />
              <path
                opacity={0.29}
                points="28.4,18.7 36.6,14.6 36.6,14.2 28.4,18.3  "
                d="M29.091 19.155L37.49 14.955L37.49 14.545L29.091 18.745Z"
              />
              <path
                opacity={0.29}
                points="26.6,17.8 34.8,13.7 34.8,13.3 26.6,17.4  "
                d="M27.247 18.233L35.647 14.033L35.647 13.624L27.247 17.823Z"
              />
              <path
                opacity={0.11}
                points="31,19.6 31,20 30.2,19.6 30.2,19.2 29.2,18.7 29.2,19.1 28.4,18.7 28.4,18.3 27.4,17.8 27.4,18.2    26.6,17.8 26.6,17.4 25.6,16.9 25.6,17.3 24.8,16.9 24.8,16.5 23.8,16 23.8,18.2 24.8,18.7 24.8,17.3 27.4,18.6 27.4,20 28.4,20.5    28.4,19.1 31,20.4 31,21.8 32,22.3 32,20.1  "
                d="M31.754 20.077L31.754 20.487L30.935 20.077L30.935 19.667L29.91 19.155L29.91 19.565L29.091 19.155L29.091 18.745L28.067 18.233L28.067 18.643L27.247 18.233L27.247 17.823L26.223 17.311L26.223 17.721L25.403 17.311L25.403 16.901L24.379 16.389L24.379 18.643L25.403 19.155L25.403 17.721L28.067 19.052L28.067 20.487L29.091 20.999L29.091 19.565L31.754 20.896L31.754 22.33L32.778 22.843L32.778 20.589Z"
              />
              <path
                opacity={0.29}
                points="24.8,16.9 33,12.8 33,12.4 24.8,16.5  "
                d="M25.403 17.311L33.803 13.111L33.803 12.702L25.403 16.901Z"
              />
              <path
                opacity={0.29}
                points="24.8,18.7 26.2,18 24.8,17.3  "
                d="M25.403 19.155L26.837 18.438L25.403 17.721Z"
              />
            </g>
            <g>
              <path
                fill="#825012"
                d="m31.959 19.974 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -0.41 0.205 -0.41 -0.205v-0.41l-1.024 -0.512 -8.399 4.2v2.254l1.024 0.512 1.434 -0.717 1.229 0.615V24.584l1.024 0.512 1.434 -0.717 1.229 0.615v1.434l1.024 0.512 8.399 -4.2V20.487l-1.024 -0.512zm-1.844 0.922 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-6.351 2.766 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-3.688 -1.844 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm-1.844 -0.922 1.639 -0.819v0.41l-1.229 0.615 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-1.639 4.097 2.254 -1.127 0.41 0.205 -2.254 1.127 -0.41 -0.205zm5.327 -2.254 -1.229 0.615 -0.41 -0.205 1.639 -0.819v0.41zm-0.819 -1.434 -2.254 1.127 -0.41 -0.205 1.639 -0.819 0.615 -0.307 0.41 0.205zm-0.819 5.941V24.584l1.639 -0.819v0.41l-1.639 0.819zm3.688 -1.844v-0.41l1.639 -0.819v0.41l-1.639 0.819z"
              />
              <path
                opacity={0.29}
                points="20.4,24.5 21.8,23.8 20.4,23.1  "
                d="M20.896 25.096L22.33 24.379L20.896 23.662Z"
              />
              <path
                opacity={0.11}
                points="31.2,22.3 30.2,21.8 30.2,21.4 31.2,20.9  "
                d="M31.959 22.843L30.935 22.33L30.935 21.921L31.959 21.408Z"
              />
              <path
                opacity={0.11}
                points="27.6,24.1 26.6,23.6 26.6,23.2 27.6,22.7  "
                d="M28.271 24.686L27.247 24.174L27.247 23.764L28.271 23.252Z"
              />
              <path
                opacity={0.11}
                points="29.4,20.4 29,20.2 29.4,20 29.8,20.2  "
                d="M30.115 20.896L29.706 20.691L30.115 20.487L30.525 20.691Z"
              />
              <path
                opacity={0.11}
                points="27.6,19.1 26.6,19.6 26.6,20 28,19.3  "
                d="M28.271 19.565L27.247 20.077L27.247 20.487L28.681 19.77Z"
              />
              <path
                opacity={0.11}
                points="25.8,18.6 25.4,18.4 25.8,18.2 26.2,18.4  "
                d="M26.428 19.052L26.018 18.848L26.428 18.643L26.837 18.848Z"
              />
              <path
                opacity={0.11}
                points="24,17.3 23,17.8 23,18.2 24.4,17.5  "
                d="M24.584 17.721L23.56 18.233L23.56 18.643L24.994 17.926Z"
              />
              <path
                opacity={0.11}
                points="25.8,22.2 25.4,22 25.8,21.8 26.2,22  "
                d="M26.428 22.74L26.018 22.535L26.428 22.33L26.837 22.535Z"
              />
              <path
                opacity={0.11}
                points="24,21.3 23.6,21.1 24,20.9 24.4,21.1  "
                d="M24.584 21.818L24.174 21.613L24.584 21.408L24.994 21.613Z"
              />
              <path
                opacity={0.11}
                points="22.2,20.4 21.8,20.2 22.2,20 22.6,20.2  "
                d="M22.74 20.896L22.33 20.691L22.74 20.487L23.15 20.691Z"
              />
              <path
                opacity={0.11}
                points="20.4,19.1 19.4,19.6 19.4,20 20.8,19.3  "
                d="M20.896 19.565L19.872 20.077L19.872 20.487L21.306 19.77Z"
              />
              <path
                opacity={0.29}
                d="M24.584 24.686v2.254l8.399 -4.2V20.487L24.584 24.686zm3.688 0L25.608 26.018V24.584l2.663 -1.332v1.434zm3.688 -1.844 -2.663 1.332v-1.434l2.663 -1.332v1.434z"
              />
              <path
                opacity={0.29}
                points="22.2,23.6 30.4,19.5 30.4,19.1 22.2,23.2  "
                d="M22.74 24.174L31.14 19.974L31.14 19.565L22.74 23.764Z"
              />
              <path
                opacity={0.29}
                points="20.4,22.7 28.6,18.6 28.6,18.2 20.4,22.3  "
                d="M20.896 23.252L29.296 19.052L29.296 18.643L20.896 22.843Z"
              />
              <path
                opacity={0.29}
                points="18.6,21.8 26.8,17.7 26.8,17.3 18.6,21.4  "
                d="M19.052 22.33L27.452 18.131L27.452 17.721L19.052 21.921Z"
              />
              <path
                opacity={0.11}
                points="23,23.6 23,24 22.2,23.6 22.2,23.2 21.2,22.7 21.2,23.1 20.4,22.7 20.4,22.3 19.4,21.8 19.4,22.2    18.6,21.8 18.6,21.4 17.6,20.9 17.6,21.3 16.8,20.9 16.8,20.5 15.8,20 15.8,22.2 16.8,22.7 16.8,21.3 19.4,22.6 19.4,24 20.4,24.5    20.4,23.1 23,24.4 23,25.8 24,26.3 24,24.1  "
                d="M23.56 24.174L23.56 24.584L22.74 24.174L22.74 23.764L21.716 23.252L21.716 23.662L20.896 23.252L20.896 22.843L19.872 22.33L19.872 22.74L19.052 22.33L19.052 21.921L18.028 21.408L18.028 21.818L17.209 21.408L17.209 20.999L16.184 20.487L16.184 22.74L17.209 23.252L17.209 21.818L19.872 23.15L19.872 24.584L20.896 25.096L20.896 23.662L23.56 24.994L23.56 26.428L24.584 26.94L24.584 24.686Z"
              />
              <path
                opacity={0.29}
                points="16.8,20.9 25,16.8 25,16.4 16.8,20.5  "
                d="M17.209 21.408L25.608 17.209L25.608 16.799L17.209 20.999Z"
              />
              <path
                opacity={0.29}
                points="16.8,22.7 18.2,22 16.8,21.3  "
                d="M17.209 23.252L18.643 22.535L17.209 21.818Z"
              />
            </g>
          </g>
        </g>
        <g id="i58" className="lvl-1" transform="translate(160 376)">
          <g>
            <g>
              <g>
                <path
                  fill="#FFCC00"
                  points="0.6,4.5 0.6,11.9 8,15.6 15.4,11.9 15.4,4.5 8,0.8   "
                  d="M0.615 4.609L0.615 12.19L8.195 15.98L15.775 12.19L15.775 4.609L8.195 0.819Z"
                />
                <path
                  opacity={0.11}
                  points="8,15.6 0.6,11.9 0.6,4.5 8,8.2   "
                  d="M8.195 15.98L0.615 12.19L0.615 4.609L8.195 8.399Z"
                />
                <path
                  opacity={0.3}
                  points="5.2,2.2 3.4,3.1 10.8,6.8 10.8,10.4 12.6,9.5 12.6,5.9   "
                  d="M5.327 2.254L3.483 3.175L11.063 6.965L11.063 10.653L12.907 9.731L12.907 6.044Z"
                />
                <path
                  opacity={0.29}
                  points="8,15.6 15.4,11.9 15.4,4.5 8,8.2   "
                  d="M8.195 15.98L15.775 12.19L15.775 4.609L8.195 8.399Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="i59" className="lvl-1" transform="matrix(.1 0 0 .1 192 384)">
          <g>
            <path
              opacity={0.2}
              points="66,146 176,201 256,161 146,106 "
              d="M67.606 149.552L180.282 205.89L262.228 164.917L149.552 108.579Z"
            />
            <g>
              <path
                fill="#2D3134"
                d="M181.204 180.794c-2.766 -1.434 -5.224 -1.536 -7.17 -0.717l-5.224 2.561c-1.946 0.922 -3.278 2.971 -3.278 5.941 0 5.736 4.609 12.702 10.346 15.57 2.868 1.434 5.429 1.536 7.273 0.615 0 0 5.122 -2.561 5.634 -2.868 1.639 -1.024 2.663 -2.971 2.663 -5.634 0.205 -5.634 -4.507 -12.599 -10.243 -15.467z"
              />
              <path
                opacity={0.39}
                d="M183.457 204.763c0.717 -0.41 5.122 -2.561 5.429 -2.766 1.639 -1.024 2.663 -2.971 2.663 -5.634 0 -2.356 -0.717 -4.814 -2.049 -7.17l-5.224 2.561c1.229 2.356 2.049 4.814 2.049 7.17 0.102 2.868 -1.024 4.917 -2.868 5.839z"
              />
              <path
                fill="#A9ABB0"
                d="M183.867 197.593c0 4.302 -3.483 6.044 -7.785 3.892s-7.785 -7.375 -7.785 -11.677 3.483 -6.044 7.785 -3.892 7.785 7.375 7.785 11.677z"
              />
              <path
                fill="#808285"
                d="M176.697 201.178c-4.302 -2.151 -7.785 -7.375 -7.785 -11.677 0 -2.151 0.819 -3.585 2.254 -4.302 -1.741 0.512 -2.868 2.151 -2.868 4.609 0 4.302 3.483 9.526 7.785 11.677 2.151 1.127 4.2 1.127 5.531 0.41 -1.332 0.41 -3.073 0.205 -4.917 -0.717z"
              />
              <path
                fill="#2D3134"
                d="M179.974 195.032c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917s1.434 -2.561 3.278 -1.639c1.844 0.922 3.278 3.175 3.278 4.917z"
              />
              <path
                opacity={0.39}
                d="M179.974 195.032c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917s1.434 -2.561 3.278 -1.639c1.844 0.922 3.278 3.175 3.278 4.917z"
              />
              <path
                fill="#2D3134"
                d="M179.257 195.339c0 1.844 -1.434 2.561 -3.278 1.639s-3.278 -3.073 -3.278 -4.917 1.434 -2.561 3.278 -1.639 3.278 3.175 3.278 4.917z"
              />
              <path
                opacity={0.06}
                d="M186.428 198.924c0 5.736 -4.609 8.092 -10.346 5.224s-10.346 -9.834 -10.346 -15.57 4.609 -8.092 10.346 -5.224c5.736 2.868 10.346 9.834 10.346 15.57z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M255.98 143.611c-2.766 -1.434 -5.224 -1.536 -7.17 -0.717l-5.224 2.561c-1.946 0.922 -3.278 2.971 -3.278 5.941 0 5.736 4.609 12.702 10.346 15.57 2.868 1.434 5.429 1.536 7.273 0.615 0 0 5.122 -2.561 5.634 -2.868 1.639 -1.024 2.663 -2.971 2.663 -5.634 0.102 -5.634 -4.507 -12.599 -10.243 -15.467z"
              />
              <path
                opacity={0.39}
                d="M258.131 167.58c0.717 -0.41 5.122 -2.561 5.429 -2.766 1.639 -1.024 2.663 -2.971 2.663 -5.634 0 -2.356 -0.717 -4.814 -2.049 -7.17l-5.224 2.561c1.229 2.356 2.049 4.814 2.049 7.17 0.102 2.868 -1.024 4.917 -2.868 5.839z"
              />
              <path
                fill="#A9ABB0"
                d="M258.54 160.41c0 4.302 -3.483 6.044 -7.785 3.892s-7.785 -7.375 -7.785 -11.677 3.483 -6.044 7.785 -3.892 7.785 7.375 7.785 11.677z"
              />
              <path
                fill="#808285"
                d="M251.37 163.995c-4.302 -2.151 -7.785 -7.375 -7.785 -11.677 0 -2.151 0.819 -3.585 2.254 -4.302 -1.741 0.512 -2.868 2.151 -2.868 4.609 0 4.302 3.483 9.526 7.785 11.677 2.151 1.127 4.2 1.127 5.531 0.41 -1.332 0.41 -2.971 0.307 -4.917 -0.717z"
              />
              <path
                fill="#2D3134"
                d="M254.648 157.849c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917 0 -1.844 1.434 -2.561 3.278 -1.639 1.844 1.024 3.278 3.175 3.278 4.917z"
              />
              <path
                opacity={0.39}
                d="M254.648 157.849c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917 0 -1.844 1.434 -2.561 3.278 -1.639 1.844 1.024 3.278 3.175 3.278 4.917z"
              />
              <path
                fill="#2D3134"
                d="M254.033 158.156c0 1.844 -1.434 2.561 -3.278 1.639s-3.278 -3.073 -3.278 -4.917 1.434 -2.561 3.278 -1.639 3.278 3.175 3.278 4.917z"
              />
              <path
                opacity={0.06}
                d="M261.101 161.741c0 5.736 -4.609 8.092 -10.346 5.224s-10.346 -9.834 -10.346 -15.57 4.609 -8.092 10.346 -5.224c5.736 2.868 10.346 9.834 10.346 15.57z"
              />
            </g>
            <g>
              <path
                fill="#2D3134"
                d="M77.234 128.963c-2.766 -1.434 -5.224 -1.536 -7.17 -0.717l-5.224 2.561c-1.946 0.922 -3.278 2.971 -3.278 5.941 0 5.736 4.609 12.702 10.346 15.57 2.868 1.434 5.429 1.536 7.273 0.615 0 0 5.122 -2.561 5.634 -2.868 1.639 -1.024 2.663 -2.971 2.663 -5.634 0.205 -5.531 -4.507 -12.599 -10.243 -15.467z"
              />
              <path
                opacity={0.39}
                d="M79.488 152.932c0.717 -0.41 5.122 -2.561 5.429 -2.766 1.639 -1.024 2.663 -2.971 2.663 -5.634 0 -2.356 -0.717 -4.814 -2.049 -7.17l-5.224 2.561c1.229 2.356 2.049 4.814 2.049 7.17 0.102 2.971 -1.024 4.917 -2.868 5.839z"
              />
              <path
                fill="#A9ABB0"
                d="M79.898 145.864c0 4.302 -3.483 6.044 -7.785 3.892s-7.785 -7.375 -7.785 -11.677 3.483 -6.044 7.785 -3.892 7.785 7.375 7.785 11.677z"
              />
              <path
                fill="#808285"
                d="M72.727 149.449c-4.302 -2.151 -7.785 -7.375 -7.785 -11.677 0 -2.151 0.819 -3.585 2.254 -4.302 -1.741 0.512 -2.868 2.151 -2.868 4.609 0 4.302 3.483 9.526 7.785 11.677 2.151 1.127 4.2 1.127 5.531 0.41 -1.332 0.41 -3.073 0.205 -4.917 -0.717z"
              />
              <path
                fill="#2D3134"
                d="M76.005 143.303c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917 0 -1.844 1.434 -2.561 3.278 -1.639 1.844 0.922 3.278 3.073 3.278 4.917z"
              />
              <path
                opacity={0.39}
                d="M76.005 143.303c0 1.844 -1.434 2.561 -3.278 1.639 -1.741 -0.922 -3.278 -3.073 -3.278 -4.917 0 -1.844 1.434 -2.561 3.278 -1.639 1.844 0.922 3.278 3.073 3.278 4.917z"
              />
              <path
                fill="#2D3134"
                d="M75.288 143.611c0 1.844 -1.434 2.561 -3.278 1.639s-3.278 -3.073 -3.278 -4.917 1.434 -2.561 3.278 -1.639 3.278 3.073 3.278 4.917z"
              />
              <path
                opacity={0.06}
                d="M82.458 147.196c0 5.736 -4.609 8.092 -10.346 5.224s-10.346 -9.834 -10.346 -15.57 4.609 -8.092 10.346 -5.224c5.736 2.868 10.346 9.834 10.346 15.57z"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#2D3134"
                  points="60,120 60,124 180,184 260,144 260,140 140,80   "
                  d="M61.46 122.919L61.46 127.017L184.379 188.476L266.325 147.503L266.325 143.406L143.406 81.946Z"
                />
                <path
                  opacity={0.11}
                  points="180,184 60,124 60,120 180,180   "
                  d="M184.379 188.476L61.46 127.017L61.46 122.919L184.379 184.379Z"
                />
                <path
                  opacity={0.29}
                  points="180,184 260,144 260,140 180,180   "
                  d="M184.379 188.476L266.325 147.503L266.325 143.406L184.379 184.379Z"
                />
              </g>
              <g>
                <path
                  fill="#FF9900"
                  points="60,110 60,120 180,180 260,140 260,130 140,70   "
                  d="M61.46 112.676L61.46 122.919L184.379 184.379L266.325 143.406L266.325 133.163L143.406 71.703Z"
                />
                <path
                  opacity={0.11}
                  points="180,180 60,120 60,110 180,170   "
                  d="M184.379 184.379L61.46 122.919L61.46 112.676L184.379 174.136Z"
                />
                <path
                  opacity={0.29}
                  points="180,180 260,140 260,130 180,170   "
                  d="M184.379 184.379L266.325 143.406L266.325 133.163L184.379 174.136Z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#FF9900"
                d="M257.823 55.519c-1.229 0 -2.561 0.307 -3.79 0.922l-55.621 27.862C189.808 88.502 184.379 97.311 184.379 106.94v61.869c0 2.049 2.049 3.585 3.995 2.868 1.229 -0.41 2.151 -1.639 2.151 -2.868v-61.869c0 -7.273 4.097 -13.931 10.653 -17.209l55.621 -27.862c0.307 -0.205 0.717 -0.307 1.024 -0.307 1.127 0 2.356 0.922 2.356 2.356v67.606c0 1.844 1.946 3.175 3.688 2.561 1.536 -0.615 2.458 -2.049 2.458 -3.585V64.02c0 -4.917 -3.995 -8.502 -8.502 -8.502z"
              />
              <path
                opacity={0.29}
                d="M257.823 55.519c-1.229 0 -2.561 0.307 -3.79 0.922l-55.621 27.862C189.808 88.502 184.379 97.311 184.379 106.94v61.869c0 2.049 2.049 3.585 3.995 2.868 1.229 -0.41 2.151 -1.639 2.151 -2.868v-61.869c0 -7.273 4.097 -13.931 10.653 -17.209l55.621 -27.862c0.307 -0.205 0.717 -0.307 1.024 -0.307 1.127 0 2.356 0.922 2.356 2.356v67.606c0 1.844 1.946 3.175 3.688 2.561 1.536 -0.615 2.458 -2.049 2.458 -3.585V64.02c0 -4.917 -3.995 -8.502 -8.502 -8.502zm5.429 75.903c0 0.717 -0.717 1.229 -1.332 0.922 -0.41 -0.102 -0.717 -0.512 -0.717 -0.922V64.942c0 -0.512 -0.205 -1.024 -0.512 -1.434h0.205c1.127 0 2.356 0.922 2.356 2.356v65.557zM260.896 57.362c-1.229 0 -2.561 0.307 -3.79 0.922L201.485 86.044c-8.604 4.302 -14.033 13.111 -14.033 22.74v59.616c0 0.717 -0.819 1.229 -1.434 0.922 -0.307 -0.205 -0.615 -0.512 -0.615 -0.922v-60.435c0 -9.629 5.429 -18.438 14.033 -22.74L255.058 57.362c1.229 -0.615 2.561 -0.922 3.79 -0.922 1.536 0 3.073 0.41 4.405 1.229 -0.717 -0.205 -1.536 -0.307 -2.356 -0.307z"
              />
            </g>
            <g>
              <path
                fill="#FBD7C7"
                d="M218.387 84.814s-1.946 -1.229 -4.917 -2.971c-2.356 -1.332 -5.019 -2.766 -4.405 -6.146 0.307 -1.434 5.941 -5.531 9.014 -4.405 1.946 0.819 2.868 2.254 3.79 3.892 1.332 2.254 2.254 3.073 2.254 3.073l-5.736 6.556z"
              />
              <path
                opacity={0.2}
                d="M315.698 243.483c-18.335 6.965 -86.556 -35.442 -74.469 -43.636 15.262 -10.243 99.667 34.008 74.469 43.636z"
              />
              <path
                fill="#2D3134"
                d="M316.62 226.069c0.717 3.073 1.639 10.755 0.205 14.136 -1.127 2.663 -6.761 3.483 -9.526 2.151 -2.868 -1.332 -5.634 -2.971 -8.195 -3.688 -5.429 -1.434 -8.912 -4.2 -8.604 -7.068 0.512 -4.2 10.141 -2.254 11.063 -2.254s1.332 -2.561 1.332 -2.561l13.726 -0.717z"
              />
              <path
                opacity={0.4}
                d="M290.499 231.703c0.102 -0.512 0.307 -1.024 0.615 -1.332 -0.102 2.766 3.38 5.429 8.604 6.863 2.561 0.717 5.327 2.254 8.195 3.688 2.663 1.229 7.682 0.615 9.219 -1.639 -0.102 0.41 -0.205 0.717 -0.307 1.024 -1.127 2.663 -6.761 3.483 -9.526 2.151s-5.634 -2.971 -8.195 -3.688c-5.327 -1.536 -8.912 -4.2 -8.604 -7.068z"
              />
              <path
                fill="#2D3134"
                d="M268.784 204.558c0.205 1.434 0.41 7.785 -0.717 9.424 -1.229 1.844 -3.892 2.254 -6.248 1.639s-11.985 -5.634 -14.545 -6.658 -4.507 -3.175 -4.609 -4.609c-0.205 -3.175 3.175 -5.941 7.068 -5.019 3.995 0.922 5.634 2.356 6.658 2.049 1.024 -0.307 1.229 -1.229 1.229 -1.229l11.165 4.405z"
              />
              <path
                opacity={0.4}
                d="M244.097 200.768c-0.307 0.717 -0.512 1.434 -0.512 2.254 0.102 1.332 1.946 3.585 4.609 4.609s12.19 6.044 14.545 6.658c1.946 0.512 4.097 0.307 5.531 -0.819l-0.307 0.615c-1.229 1.844 -3.892 2.254 -6.248 1.639s-11.985 -5.634 -14.545 -6.658 -4.507 -3.175 -4.609 -4.609c0 -1.434 0.512 -2.663 1.536 -3.688z"
              />
              <path
                fill="#06547A"
                d="M301.767 102.125s-10.243 1.639 -17.926 1.639 -21.204 -2.458 -21.204 -2.458 -5.224 19.872 -5.839 27.452c-1.434 16.799 1.434 33.086 1.229 37.695 -0.205 4.609 -1.024 21.716 -1.229 26.735s-2.561 9.117 -1.536 10.96 10.038 8.707 15.262 6.248c1.741 -0.819 3.79 -26.018 3.79 -35.954 0 -10.038 -0.205 -12.087 2.049 -20.794s4.609 -20.384 4.609 -20.384 5.429 20.589 8.707 31.242 4.609 20.896 6.453 31.037c1.844 10.243 4.507 30.525 4.814 33.496 0.205 2.151 4.097 4.814 8.092 6.248 3.79 1.332 8.502 0.717 9.424 -0.307 0.922 -1.024 -1.844 -24.277 -2.049 -28.067 -0.205 -3.79 -2.868 -20.487 -4.609 -29.193s-0.922 -27.145 -3.79 -45.173c-2.458 -15.877 -6.248 -30.423 -6.248 -30.423z"
              />
              <path
                fill="#3399CC"
                d="M264.686 58.387c-1.229 -1.229 -4.405 -0.717 -6.863 3.892 -2.458 4.609 -12.394 20.282 -12.394 20.282s-20.282 -5.019 -21.818 -5.122 -8.912 6.761 -5.531 8.297c3.483 1.536 23.662 10.755 26.94 11.063 3.483 0.307 11.78 -3.175 21.511 -14.853 4.814 -5.839 4.097 -5.122 4.097 -5.122l-5.941 -18.438z"
              />
              <path
                fill="#FBD7C7"
                d="M245.531 71.191s-1.536 -0.512 -5.224 -0.819c-1.229 -0.102 0.307 -2.254 -2.151 -3.892 -1.434 -0.922 -4.302 0.41 -4.507 -1.434 -0.102 -1.434 4.507 -6.248 7.785 -5.941 2.151 0.205 3.585 0.717 4.917 1.946 1.844 1.741 2.971 2.356 2.971 2.356l-3.79 7.785z"
              />
              <path
                fill="#3399CC"
                d="M281.178 72.727s-29.808 -9.731 -31.344 -9.526 -7.58 8.297 -3.892 9.219c3.688 0.922 38.822 15.058 41.793 13.828s17.414 -19.872 17.414 -19.872L281.178 72.727z"
              />
              <path
                fill="#FBD7C7"
                d="M292.65 47.119s-6.351 3.175 -10.038 3.79c-3.688 0.615 -10.858 0.41 -10.858 0.41s-1.024 -6.658 -1.639 -7.887c-0.615 -1.229 -2.868 -2.971 -3.38 -5.839 -0.41 -2.766 -1.844 -14.341 0 -16.697 1.844 -2.254 11.78 -7.99 17.516 -1.229s2.049 18.131 2.458 20.794c0.512 2.766 5.941 6.658 5.941 6.658z"
              />
              <path
                fill="#762C07"
                d="M287.222 42.1s-6.556 2.356 -10.448 1.639c-3.892 -0.717 -6.248 -4.609 -6.248 -4.609s-0.102 -5.224 -1.229 -7.068c-1.127 -1.844 -1.639 -0.819 -1.639 -0.819s-2.151 -4.2 -1.639 -7.068c0.512 -2.868 3.483 -10.141 13.726 -7.478 8.092 2.049 9.219 10.551 9.117 14.136s-1.639 11.268 -1.639 11.268z"
              />
              <path
                fill="#99CC33"
                d="M292.65 47.119s-4.2 1.229 -8.707 2.049c-4.609 0.819 -12.087 2.049 -12.087 2.049s-5.122 3.278 -6.658 4.2c-2.049 1.229 -4.917 2.868 -4.097 3.175 1.127 0.41 2.971 5.531 3.79 13.009s-5.019 16.901 -5.019 16.901 0.102 9.731 -0.41 13.828c-0.717 6.248 -1.536 13.828 -1.127 16.389 0.307 1.946 17.209 3.175 25.198 2.971 8.092 -0.307 21.818 -0.512 22.843 -5.224 0.512 -2.561 -2.766 -15.365 -2.254 -21.101 0.41 -4.302 6.761 -29.706 3.892 -40.973 -1.741 -6.556 -15.365 -7.273 -15.365 -7.273z"
              />
            </g>
          </g>
        </g>
        <g id="group-1" className="lvl-1" transform={selectedGroup === 1 ? 'translate(50%,50%)':'matrix(-1 0 0 1 504 144)'} onClick={() => handleClick(1)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,72 24,72.6 25.2,72 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 73.752L24.584 74.366L25.813 73.752L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,72.6 22.8,72 22.8,8 24,8.6   "
                  d="M24.584 74.366L23.355 73.752L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,72.6 25.2,72 25.2,8 24,8.6   "
                  d="M24.584 74.366L25.813 73.752L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,88 56,88.6 57.2,88 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 90.141L57.362 90.755L58.592 90.141L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,88.6 54.8,88 54.8,24 56,24.6   "
                  d="M57.362 90.755L56.133 90.141L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,88.6 57.2,88 57.2,24 56,24.6   "
                  d="M57.362 90.755L58.592 90.141L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,80 8,80.6 9.2,80 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 81.946L8.195 82.561L9.424 81.946L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,80.6 6.8,80 6.8,16 8,16.6   "
                  d="M8.195 82.561L6.965 81.946L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,80.6 9.2,80 9.2,16 8,16.6   "
                  d="M8.195 82.561L9.424 81.946L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,79.6 8,80.2 40,96.2 48,92.2 48,91.6 16,75.6   "
                  d="M8.195 81.536L8.195 82.151L40.973 98.54L49.168 94.443L49.168 93.828L16.389 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.2 8,80.2 8,79.6 40,95.6   "
                  d="M40.973 98.54L8.195 82.151L8.195 81.536L40.973 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.2 48,92.2 48,91.6 40,95.6   "
                  d="M40.973 98.54L49.168 94.443L49.168 93.828L40.973 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,72.2 23.4,79.6 16,83.3 8.6,79.6 8.6,72.2 16,68.5   "
                  d="M23.969 73.956L23.969 81.536L16.389 85.327L8.809 81.536L8.809 73.956L16.389 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="16,83.3 23.4,79.6 23.4,72.2 16,75.9   "
                  d="M16.389 85.327L23.969 81.536L23.969 73.956L16.389 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,69.9 20.6,70.8 13.2,74.5 13.2,78.1 11.4,77.2 11.4,73.6   "
                  d="M19.257 71.601L21.101 72.522L13.521 76.312L13.521 80L11.677 79.078L11.677 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="16,83.3 8.6,79.6 8.6,72.2 16,75.9   "
                  d="M16.389 85.327L8.809 81.536L8.809 73.956L16.389 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,76.2 31.4,83.6 24,87.3 16.6,83.6 16.6,76.2 24,72.5   "
                  d="M32.164 78.054L32.164 85.634L24.584 89.424L17.004 85.634L17.004 78.054L24.584 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="24,87.3 31.4,83.6 31.4,76.2 24,79.9   "
                  d="M24.584 89.424L32.164 85.634L32.164 78.054L24.584 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,73.9 28.6,74.8 21.2,78.5 21.2,82.1 19.4,81.2 19.4,77.6   "
                  d="M27.452 75.698L29.296 76.62L21.716 80.41L21.716 84.097L19.872 83.175L19.872 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="24,87.3 16.6,83.6 16.6,76.2 24,79.9   "
                  d="M24.584 89.424L17.004 85.634L17.004 78.054L24.584 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,80.2 39.4,87.6 32,91.3 24.6,87.6 24.6,80.2 32,76.5   "
                  d="M40.359 82.151L40.359 89.731L32.778 93.521L25.198 89.731L25.198 82.151L32.778 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="32,91.3 39.4,87.6 39.4,80.2 32,83.9   "
                  d="M32.778 93.521L40.359 89.731L40.359 82.151L32.778 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,77.9 36.6,78.8 29.2,82.5 29.2,86.1 27.4,85.2 27.4,81.6   "
                  d="M35.647 79.795L37.49 80.717L29.91 84.507L29.91 88.195L28.067 87.273L28.067 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="32,91.3 24.6,87.6 24.6,80.2 32,83.9   "
                  d="M32.778 93.521L25.198 89.731L25.198 82.151L32.778 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,84.2 47.4,91.6 40,95.3 32.6,91.6 32.6,84.2 40,80.5   "
                  d="M48.553 86.248L48.553 93.828L40.973 97.618L33.393 93.828L33.393 86.248L40.973 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="40,95.3 47.4,91.6 47.4,84.2 40,87.9   "
                  d="M40.973 97.618L48.553 93.828L48.553 86.248L40.973 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,81.9 44.6,82.8 37.2,86.5 37.2,90.1 35.4,89.2 35.4,85.6   "
                  d="M43.841 83.892L45.685 84.814L38.105 88.604L38.105 92.292L36.261 91.37L36.261 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="40,95.3 32.6,91.6 32.6,84.2 40,87.9   "
                  d="M40.973 97.618L33.393 93.828L33.393 86.248L40.973 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,71.6 8,72.2 40,88.2 48,84.2 48,83.6 16,67.6   "
                  d="M8.195 73.342L8.195 73.956L40.973 90.346L49.168 86.248L49.168 85.634L16.389 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="40,88.2 8,72.2 8,71.6 40,87.6   "
                  d="M40.973 90.346L8.195 73.956L8.195 73.342L40.973 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="40,88.2 48,84.2 48,83.6 40,87.6   "
                  d="M40.973 90.346L49.168 86.248L49.168 85.634L40.973 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,64.2 23.4,71.6 16,75.3 8.6,71.6 8.6,64.2 16,60.5   "
                  d="M23.969 65.762L23.969 73.342L16.389 77.132L8.809 73.342L8.809 65.762L16.389 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="16,75.3 23.4,71.6 23.4,64.2 16,67.9   "
                  d="M16.389 77.132L23.969 73.342L23.969 65.762L16.389 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,61.9 20.6,62.8 13.2,66.5 13.2,70.1 11.4,69.2 11.4,65.6   "
                  d="M19.257 63.406L21.101 64.328L13.521 68.118L13.521 71.805L11.677 70.883L11.677 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="16,75.3 8.6,71.6 8.6,64.2 16,67.9   "
                  d="M16.389 77.132L8.809 73.342L8.809 65.762L16.389 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,68.2 31.4,75.6 24,79.3 16.6,75.6 16.6,68.2 24,64.5   "
                  d="M32.164 69.859L32.164 77.439L24.584 81.229L17.004 77.439L17.004 69.859L24.584 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="24,79.3 31.4,75.6 31.4,68.2 24,71.9   "
                  d="M24.584 81.229L32.164 77.439L32.164 69.859L24.584 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,65.9 28.6,66.8 21.2,70.5 21.2,74.1 19.4,73.2 19.4,69.6   "
                  d="M27.452 67.503L29.296 68.425L21.716 72.215L21.716 75.903L19.872 74.981L19.872 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="24,79.3 16.6,75.6 16.6,68.2 24,71.9   "
                  d="M24.584 81.229L17.004 77.439L17.004 69.859L24.584 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,72.2 39.4,79.6 32,83.3 24.6,79.6 24.6,72.2 32,68.5   "
                  d="M40.359 73.956L40.359 81.536L32.778 85.327L25.198 81.536L25.198 73.956L32.778 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="32,83.3 39.4,79.6 39.4,72.2 32,75.9   "
                  d="M32.778 85.327L40.359 81.536L40.359 73.956L32.778 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,69.9 36.6,70.8 29.2,74.5 29.2,78.1 27.4,77.2 27.4,73.6   "
                  d="M35.647 71.601L37.49 72.522L29.91 76.312L29.91 80L28.067 79.078L28.067 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="32,83.3 24.6,79.6 24.6,72.2 32,75.9   "
                  d="M32.778 85.327L25.198 81.536L25.198 73.956L32.778 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,76.2 47.4,83.6 40,87.3 32.6,83.6 32.6,76.2 40,72.5   "
                  d="M48.553 78.054L48.553 85.634L40.973 89.424L33.393 85.634L33.393 78.054L40.973 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="40,87.3 47.4,83.6 47.4,76.2 40,79.9   "
                  d="M40.973 89.424L48.553 85.634L48.553 78.054L40.973 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,73.9 44.6,74.8 37.2,78.5 37.2,82.1 35.4,81.2 35.4,77.6   "
                  d="M43.841 75.698L45.685 76.62L38.105 80.41L38.105 84.097L36.261 83.175L36.261 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="40,87.3 32.6,83.6 32.6,76.2 40,79.9   "
                  d="M40.973 89.424L33.393 85.634L33.393 78.054L40.973 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,63.6 8,64.2 40,80.2 48,76.2 48,75.6 16,59.6   "
                  d="M8.195 65.147L8.195 65.762L40.973 82.151L49.168 78.054L49.168 77.439L16.389 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="40,80.2 8,64.2 8,63.6 40,79.6   "
                  d="M40.973 82.151L8.195 65.762L8.195 65.147L40.973 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="40,80.2 48,76.2 48,75.6 40,79.6   "
                  d="M40.973 82.151L49.168 78.054L49.168 77.439L40.973 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,56.2 23.4,63.6 16,67.3 8.6,63.6 8.6,56.2 16,52.5   "
                  d="M23.969 57.567L23.969 65.147L16.389 68.937L8.809 65.147L8.809 57.567L16.389 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="16,67.3 23.4,63.6 23.4,56.2 16,59.9   "
                  d="M16.389 68.937L23.969 65.147L23.969 57.567L16.389 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,53.9 20.6,54.8 13.2,58.5 13.2,62.1 11.4,61.2 11.4,57.6   "
                  d="M19.257 55.211L21.101 56.133L13.521 59.923L13.521 63.611L11.677 62.689L11.677 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="16,67.3 8.6,63.6 8.6,56.2 16,59.9   "
                  d="M16.389 68.937L8.809 65.147L8.809 57.567L16.389 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,60.2 31.4,67.6 24,71.3 16.6,67.6 16.6,60.2 24,56.5   "
                  d="M32.164 61.665L32.164 69.245L24.584 73.035L17.004 69.245L17.004 61.665L24.584 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="24,71.3 31.4,67.6 31.4,60.2 24,63.9   "
                  d="M24.584 73.035L32.164 69.245L32.164 61.665L24.584 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,57.9 28.6,58.8 21.2,62.5 21.2,66.1 19.4,65.2 19.4,61.6   "
                  d="M27.452 59.309L29.296 60.23L21.716 64.02L21.716 67.708L19.872 66.786L19.872 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="24,71.3 16.6,67.6 16.6,60.2 24,63.9   "
                  d="M24.584 73.035L17.004 69.245L17.004 61.665L24.584 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,64.2 39.4,71.6 32,75.3 24.6,71.6 24.6,64.2 32,60.5   "
                  d="M40.359 65.762L40.359 73.342L32.778 77.132L25.198 73.342L25.198 65.762L32.778 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="32,75.3 39.4,71.6 39.4,64.2 32,67.9   "
                  d="M32.778 77.132L40.359 73.342L40.359 65.762L32.778 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,61.9 36.6,62.8 29.2,66.5 29.2,70.1 27.4,69.2 27.4,65.6   "
                  d="M35.647 63.406L37.49 64.328L29.91 68.118L29.91 71.805L28.067 70.883L28.067 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="32,75.3 24.6,71.6 24.6,64.2 32,67.9   "
                  d="M32.778 77.132L25.198 73.342L25.198 65.762L32.778 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,68.2 47.4,75.6 40,79.3 32.6,75.6 32.6,68.2 40,64.5   "
                  d="M48.553 69.859L48.553 77.439L40.973 81.229L33.393 77.439L33.393 69.859L40.973 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="40,79.3 47.4,75.6 47.4,68.2 40,71.9   "
                  d="M40.973 81.229L48.553 77.439L48.553 69.859L40.973 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,65.9 44.6,66.8 37.2,70.5 37.2,74.1 35.4,73.2 35.4,69.6   "
                  d="M43.841 67.503L45.685 68.425L38.105 72.215L38.105 75.903L36.261 74.981L36.261 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="40,79.3 32.6,75.6 32.6,68.2 40,71.9   "
                  d="M40.973 81.229L33.393 77.439L33.393 69.859L40.973 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,55.6 8,56.2 40,72.2 48,68.2 48,67.6 16,51.6   "
                  d="M8.195 56.953L8.195 57.567L40.973 73.956L49.168 69.859L49.168 69.245L16.389 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="40,72.2 8,56.2 8,55.6 40,71.6   "
                  d="M40.973 73.956L8.195 57.567L8.195 56.953L40.973 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="40,72.2 48,68.2 48,67.6 40,71.6   "
                  d="M40.973 73.956L49.168 69.859L49.168 69.245L40.973 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,48.2 23.4,55.6 16,59.3 8.6,55.6 8.6,48.2 16,44.5   "
                  d="M23.969 49.373L23.969 56.953L16.389 60.743L8.809 56.953L8.809 49.373L16.389 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="16,59.3 23.4,55.6 23.4,48.2 16,51.9   "
                  d="M16.389 60.743L23.969 56.953L23.969 49.373L16.389 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,45.9 20.6,46.8 13.2,50.5 13.2,54.1 11.4,53.2 11.4,49.6   "
                  d="M19.257 47.017L21.101 47.939L13.521 51.729L13.521 55.416L11.677 54.494L11.677 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="16,59.3 8.6,55.6 8.6,48.2 16,51.9   "
                  d="M16.389 60.743L8.809 56.953L8.809 49.373L16.389 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,52.2 31.4,59.6 24,63.3 16.6,59.6 16.6,52.2 24,48.5   "
                  d="M32.164 53.47L32.164 61.05L24.584 64.84L17.004 61.05L17.004 53.47L24.584 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="24,63.3 31.4,59.6 31.4,52.2 24,55.9   "
                  d="M24.584 64.84L32.164 61.05L32.164 53.47L24.584 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,49.9 28.6,50.8 21.2,54.5 21.2,58.1 19.4,57.2 19.4,53.6   "
                  d="M27.452 51.114L29.296 52.036L21.716 55.826L21.716 59.513L19.872 58.592L19.872 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="24,63.3 16.6,59.6 16.6,52.2 24,55.9   "
                  d="M24.584 64.84L17.004 61.05L17.004 53.47L24.584 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,56.2 39.4,63.6 32,67.3 24.6,63.6 24.6,56.2 32,52.5   "
                  d="M40.359 57.567L40.359 65.147L32.778 68.937L25.198 65.147L25.198 57.567L32.778 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="32,67.3 39.4,63.6 39.4,56.2 32,59.9   "
                  d="M32.778 68.937L40.359 65.147L40.359 57.567L32.778 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,53.9 36.6,54.8 29.2,58.5 29.2,62.1 27.4,61.2 27.4,57.6   "
                  d="M35.647 55.211L37.49 56.133L29.91 59.923L29.91 63.611L28.067 62.689L28.067 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="32,67.3 24.6,63.6 24.6,56.2 32,59.9   "
                  d="M32.778 68.937L25.198 65.147L25.198 57.567L32.778 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,60.2 47.4,67.6 40,71.3 32.6,67.6 32.6,60.2 40,56.5   "
                  d="M48.553 61.665L48.553 69.245L40.973 73.035L33.393 69.245L33.393 61.665L40.973 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="40,71.3 47.4,67.6 47.4,60.2 40,63.9   "
                  d="M40.973 73.035L48.553 69.245L48.553 61.665L40.973 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,57.9 44.6,58.8 37.2,62.5 37.2,66.1 35.4,65.2 35.4,61.6   "
                  d="M43.841 59.309L45.685 60.23L38.105 64.02L38.105 67.708L36.261 66.786L36.261 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="40,71.3 32.6,67.6 32.6,60.2 40,63.9   "
                  d="M40.973 73.035L33.393 69.245L33.393 61.665L40.973 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,47.6 8,48.2 40,64.2 48,60.2 48,59.6 16,43.6   "
                  d="M8.195 48.758L8.195 49.373L40.973 65.762L49.168 61.665L49.168 61.05L16.389 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="40,64.2 8,48.2 8,47.6 40,63.6   "
                  d="M40.973 65.762L8.195 49.373L8.195 48.758L40.973 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="40,64.2 48,60.2 48,59.6 40,63.6   "
                  d="M40.973 65.762L49.168 61.665L49.168 61.05L40.973 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,40.2 23.4,47.6 16,51.3 8.6,47.6 8.6,40.2 16,36.5   "
                  d="M23.969 41.178L23.969 48.758L16.389 52.548L8.809 48.758L8.809 41.178L16.389 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="16,51.3 23.4,47.6 23.4,40.2 16,43.9   "
                  d="M16.389 52.548L23.969 48.758L23.969 41.178L16.389 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,37.9 20.6,38.8 13.2,42.5 13.2,46.1 11.4,45.2 11.4,41.6   "
                  d="M19.257 38.822L21.101 39.744L13.521 43.534L13.521 47.222L11.677 46.3L11.677 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="16,51.3 8.6,47.6 8.6,40.2 16,43.9   "
                  d="M16.389 52.548L8.809 48.758L8.809 41.178L16.389 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,44.2 31.4,51.6 24,55.3 16.6,51.6 16.6,44.2 24,40.5   "
                  d="M32.164 45.275L32.164 52.855L24.584 56.645L17.004 52.855L17.004 45.275L24.584 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="24,55.3 31.4,51.6 31.4,44.2 24,47.9   "
                  d="M24.584 56.645L32.164 52.855L32.164 45.275L24.584 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,41.9 28.6,42.8 21.2,46.5 21.2,50.1 19.4,49.2 19.4,45.6   "
                  d="M27.452 42.919L29.296 43.841L21.716 47.631L21.716 51.319L19.872 50.397L19.872 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="24,55.3 16.6,51.6 16.6,44.2 24,47.9   "
                  d="M24.584 56.645L17.004 52.855L17.004 45.275L24.584 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,48.2 39.4,55.6 32,59.3 24.6,55.6 24.6,48.2 32,44.5   "
                  d="M40.359 49.373L40.359 56.953L32.778 60.743L25.198 56.953L25.198 49.373L32.778 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="32,59.3 39.4,55.6 39.4,48.2 32,51.9   "
                  d="M32.778 60.743L40.359 56.953L40.359 49.373L32.778 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,45.9 36.6,46.8 29.2,50.5 29.2,54.1 27.4,53.2 27.4,49.6   "
                  d="M35.647 47.017L37.49 47.939L29.91 51.729L29.91 55.416L28.067 54.494L28.067 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="32,59.3 24.6,55.6 24.6,48.2 32,51.9   "
                  d="M32.778 60.743L25.198 56.953L25.198 49.373L32.778 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,52.2 47.4,59.6 40,63.3 32.6,59.6 32.6,52.2 40,48.5   "
                  d="M48.553 53.47L48.553 61.05L40.973 64.84L33.393 61.05L33.393 53.47L40.973 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="40,63.3 47.4,59.6 47.4,52.2 40,55.9   "
                  d="M40.973 64.84L48.553 61.05L48.553 53.47L40.973 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,49.9 44.6,50.8 37.2,54.5 37.2,58.1 35.4,57.2 35.4,53.6   "
                  d="M43.841 51.114L45.685 52.036L38.105 55.826L38.105 59.513L36.261 58.592L36.261 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="40,63.3 32.6,59.6 32.6,52.2 40,55.9   "
                  d="M40.973 64.84L33.393 61.05L33.393 53.47L40.973 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,96 40,96.6 41.2,96 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 98.335L40.973 98.95L42.202 98.335L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.6 38.8,96 38.8,32 40,32.6   "
                  d="M40.973 98.95L39.744 98.335L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.6 41.2,96 41.2,32 40,32.6   "
                  d="M40.973 98.95L42.202 98.335L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="86.8,40 86.8,104 88,104.6 89.2,104 89.2,40 88,39.4   "
                  d="M88.912 40.973L88.912 106.53L90.141 107.145L91.37 106.53L91.37 40.973L90.141 40.359Z"
                />
                <path
                  opacity={0.29}
                  points="88,104.6 86.8,104 86.8,40 88,40.6   "
                  d="M90.141 107.145L88.912 106.53L88.912 40.973L90.141 41.588Z"
                />
                <path
                  opacity={0.11}
                  points="88,104.6 89.2,104 89.2,40 88,40.6   "
                  d="M90.141 107.145L91.37 106.53L91.37 40.973L90.141 41.588Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,91.6 48,92.2 80,108.2 88,104.2 88,103.6 56,87.6   "
                  d="M49.168 93.828L49.168 94.443L81.946 110.832L90.141 106.735L90.141 106.12L57.362 89.731Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.2 48,92.2 48,91.6 80,107.6   "
                  d="M81.946 110.832L49.168 94.443L49.168 93.828L81.946 110.218Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.2 88,104.2 88,103.6 80,107.6   "
                  d="M81.946 110.832L90.141 106.735L90.141 106.12L81.946 110.218Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,96.2 87.4,103.6 80,107.3 72.6,103.6 72.6,96.2 80,92.5   "
                  d="M89.526 98.54L89.526 106.12L81.946 109.91L74.366 106.12L74.366 98.54L81.946 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="80,107.3 87.4,103.6 87.4,96.2 80,99.9   "
                  d="M81.946 109.91L89.526 106.12L89.526 98.54L81.946 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,93.9 84.6,94.8 77.2,98.5 77.2,102.1 75.4,101.2 75.4,97.6   "
                  d="M84.814 96.184L86.658 97.106L79.078 100.896L79.078 104.584L77.234 103.662L77.234 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="80,107.3 72.6,103.6 72.6,96.2 80,99.9   "
                  d="M81.946 109.91L74.366 106.12L74.366 98.54L81.946 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,83.6 48,84.2 80,100.2 88,96.2 88,95.6 56,79.6   "
                  d="M49.168 85.634L49.168 86.248L81.946 102.638L90.141 98.54L90.141 97.926L57.362 81.536Z"
                />
                <path
                  opacity={0.29}
                  points="80,100.2 48,84.2 48,83.6 80,99.6   "
                  d="M81.946 102.638L49.168 86.248L49.168 85.634L81.946 102.023Z"
                />
                <path
                  opacity={0.11}
                  points="80,100.2 88,96.2 88,95.6 80,99.6   "
                  d="M81.946 102.638L90.141 98.54L90.141 97.926L81.946 102.023Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,88.2 87.4,95.6 80,99.3 72.6,95.6 72.6,88.2 80,84.5   "
                  d="M89.526 90.346L89.526 97.926L81.946 101.716L74.366 97.926L74.366 90.346L81.946 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="80,99.3 87.4,95.6 87.4,88.2 80,91.9   "
                  d="M81.946 101.716L89.526 97.926L89.526 90.346L81.946 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,85.9 84.6,86.8 77.2,90.5 77.2,94.1 75.4,93.2 75.4,89.6   "
                  d="M84.814 87.99L86.658 88.912L79.078 92.702L79.078 96.389L77.234 95.467L77.234 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="80,99.3 72.6,95.6 72.6,88.2 80,91.9   "
                  d="M81.946 101.716L74.366 97.926L74.366 90.346L81.946 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,98.9 88,89.6 88,89 87.4,88.7 81.1,97.4   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L89.526 90.858L83.073 99.77Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,98.9 88,89.6 88,89 81.1,98.3   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L83.073 100.691Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,106.9 88,97.6 88,97 87.4,96.7 81.1,105.4   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L89.526 99.052L83.073 107.964Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,106.9 88,97.6 88,97 81.1,106.3   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L83.073 108.886Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,75.6 48,76.2 80,92.2 88,88.2 88,87.6 56,71.6   "
                  d="M49.168 77.439L49.168 78.054L81.946 94.443L90.141 90.346L90.141 89.731L57.362 73.342Z"
                />
                <path
                  opacity={0.29}
                  points="80,92.2 48,76.2 48,75.6 80,91.6   "
                  d="M81.946 94.443L49.168 78.054L49.168 77.439L81.946 93.828Z"
                />
                <path
                  opacity={0.11}
                  points="80,92.2 88,88.2 88,87.6 80,91.6   "
                  d="M81.946 94.443L90.141 90.346L90.141 89.731L81.946 93.828Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,80.2 87.4,87.6 80,91.3 72.6,87.6 72.6,80.2 80,76.5   "
                  d="M89.526 82.151L89.526 89.731L81.946 93.521L74.366 89.731L74.366 82.151L81.946 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="80,91.3 87.4,87.6 87.4,80.2 80,83.9   "
                  d="M81.946 93.521L89.526 89.731L89.526 82.151L81.946 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,77.9 84.6,78.8 77.2,82.5 77.2,86.1 75.4,85.2 75.4,81.6   "
                  d="M84.814 79.795L86.658 80.717L79.078 84.507L79.078 88.195L77.234 87.273L77.234 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="80,91.3 72.6,87.6 72.6,80.2 80,83.9   "
                  d="M81.946 93.521L74.366 89.731L74.366 82.151L81.946 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,91 88,81.7 88,81.1 87.4,80.8 81.1,89.5   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L89.526 82.766L83.073 91.677Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,91 88,81.7 88,81.1 81.1,90.4   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L83.073 92.599Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,67.6 48,68.2 80,84.2 88,80.2 88,79.6 56,63.6   "
                  d="M49.168 69.245L49.168 69.859L81.946 86.248L90.141 82.151L90.141 81.536L57.362 65.147Z"
                />
                <path
                  opacity={0.29}
                  points="80,84.2 48,68.2 48,67.6 80,83.6   "
                  d="M81.946 86.248L49.168 69.859L49.168 69.245L81.946 85.634Z"
                />
                <path
                  opacity={0.11}
                  points="80,84.2 88,80.2 88,79.6 80,83.6   "
                  d="M81.946 86.248L90.141 82.151L90.141 81.536L81.946 85.634Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,72.2 87.4,79.6 80,83.3 72.6,79.6 72.6,72.2 80,68.5   "
                  d="M89.526 73.956L89.526 81.536L81.946 85.327L74.366 81.536L74.366 73.956L81.946 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="80,83.3 87.4,79.6 87.4,72.2 80,75.9   "
                  d="M81.946 85.327L89.526 81.536L89.526 73.956L81.946 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,69.9 84.6,70.8 77.2,74.5 77.2,78.1 75.4,77.2 75.4,73.6   "
                  d="M84.814 71.601L86.658 72.522L79.078 76.312L79.078 80L77.234 79.078L77.234 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="80,83.3 72.6,79.6 72.6,72.2 80,75.9   "
                  d="M81.946 85.327L74.366 81.536L74.366 73.956L81.946 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,59.6 48,60.2 80,76.2 88,72.2 88,71.6 56,55.6   "
                  d="M49.168 61.05L49.168 61.665L81.946 78.054L90.141 73.956L90.141 73.342L57.362 56.953Z"
                />
                <path
                  opacity={0.29}
                  points="80,76.2 48,60.2 48,59.6 80,75.6   "
                  d="M81.946 78.054L49.168 61.665L49.168 61.05L81.946 77.439Z"
                />
                <path
                  opacity={0.11}
                  points="80,76.2 88,72.2 88,71.6 80,75.6   "
                  d="M81.946 78.054L90.141 73.956L90.141 73.342L81.946 77.439Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,64.2 87.4,71.6 80,75.3 72.6,71.6 72.6,64.2 80,60.5   "
                  d="M89.526 65.762L89.526 73.342L81.946 77.132L74.366 73.342L74.366 65.762L81.946 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="80,75.3 87.4,71.6 87.4,64.2 80,67.9   "
                  d="M81.946 77.132L89.526 73.342L89.526 65.762L81.946 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,61.9 84.6,62.8 77.2,66.5 77.2,70.1 75.4,69.2 75.4,65.6   "
                  d="M84.814 63.406L86.658 64.328L79.078 68.118L79.078 71.805L77.234 70.883L77.234 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="80,75.3 72.6,71.6 72.6,64.2 80,67.9   "
                  d="M81.946 77.132L74.366 73.342L74.366 65.762L81.946 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,74.9 88,65.6 88,65 87.4,64.7 81.1,73.4   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L89.526 66.274L83.073 75.186Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,74.9 88,65.6 88,65 81.1,74.3   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L83.073 76.108Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,82.9 88,73.6 88,73 87.4,72.7 81.1,81.4   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L89.526 74.469L83.073 83.38Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,82.9 88,73.6 88,73 81.1,82.3   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L83.073 84.302Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,51.6 48,52.2 80,68.2 88,64.2 88,63.6 56,47.6   "
                  d="M49.168 52.855L49.168 53.47L81.946 69.859L90.141 65.762L90.141 65.147L57.362 48.758Z"
                />
                <path
                  opacity={0.29}
                  points="80,68.2 48,52.2 48,51.6 80,67.6   "
                  d="M81.946 69.859L49.168 53.47L49.168 52.855L81.946 69.245Z"
                />
                <path
                  opacity={0.11}
                  points="80,68.2 88,64.2 88,63.6 80,67.6   "
                  d="M81.946 69.859L90.141 65.762L90.141 65.147L81.946 69.245Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,56.2 87.4,63.6 80,67.3 72.6,63.6 72.6,56.2 80,52.5   "
                  d="M89.526 57.567L89.526 65.147L81.946 68.937L74.366 65.147L74.366 57.567L81.946 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="80,67.3 87.4,63.6 87.4,56.2 80,59.9   "
                  d="M81.946 68.937L89.526 65.147L89.526 57.567L81.946 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,53.9 84.6,54.8 77.2,58.5 77.2,62.1 75.4,61.2 75.4,57.6   "
                  d="M84.814 55.211L86.658 56.133L79.078 59.923L79.078 63.611L77.234 62.689L77.234 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="80,67.3 72.6,63.6 72.6,56.2 80,59.9   "
                  d="M81.946 68.937L74.366 65.147L74.366 57.567L81.946 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,67 88,57.7 88,57.1 87.4,56.8 81.1,65.5   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L89.526 58.182L83.073 67.093Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,67 88,57.7 88,57.1 81.1,66.4   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L83.073 68.015Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,43.6 48,44.2 80,60.2 88,56.2 88,55.6 56,39.6   "
                  d="M49.168 44.661L49.168 45.275L81.946 61.665L90.141 57.567L90.141 56.953L57.362 40.563Z"
                />
                <path
                  opacity={0.29}
                  points="80,60.2 48,44.2 48,43.6 80,59.6   "
                  d="M81.946 61.665L49.168 45.275L49.168 44.661L81.946 61.05Z"
                />
                <path
                  opacity={0.11}
                  points="80,60.2 88,56.2 88,55.6 80,59.6   "
                  d="M81.946 61.665L90.141 57.567L90.141 56.953L81.946 61.05Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,48.2 87.4,55.6 80,59.3 72.6,55.6 72.6,48.2 80,44.5   "
                  d="M89.526 49.373L89.526 56.953L81.946 60.743L74.366 56.953L74.366 49.373L81.946 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="80,59.3 87.4,55.6 87.4,48.2 80,51.9   "
                  d="M81.946 60.743L89.526 56.953L89.526 49.373L81.946 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,45.9 84.6,46.8 77.2,50.5 77.2,54.1 75.4,53.2 75.4,49.6   "
                  d="M84.814 47.017L86.658 47.939L79.078 51.729L79.078 55.416L77.234 54.494L77.234 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="80,59.3 72.6,55.6 72.6,48.2 80,51.9   "
                  d="M81.946 60.743L74.366 56.953L74.366 49.373L81.946 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,35.6 48,36.2 80,52.2 88,48.2 88,47.6 56,31.6   "
                  d="M49.168 36.466L49.168 37.081L81.946 53.47L90.141 49.373L90.141 48.758L57.362 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="80,52.2 48,36.2 48,35.6 80,51.6   "
                  d="M81.946 53.47L49.168 37.081L49.168 36.466L81.946 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="80,52.2 88,48.2 88,47.6 80,51.6   "
                  d="M81.946 53.47L90.141 49.373L90.141 48.758L81.946 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,28.2 63.4,35.6 56,39.3 48.6,35.6 48.6,28.2 56,24.5   "
                  d="M64.942 28.886L64.942 36.466L57.362 40.256L49.782 36.466L49.782 28.886L57.362 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="56,39.3 63.4,35.6 63.4,28.2 56,31.9   "
                  d="M57.362 40.256L64.942 36.466L64.942 28.886L57.362 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,25.9 60.6,26.8 53.2,30.5 53.2,34.1 51.4,33.2 51.4,29.6   "
                  d="M60.23 26.53L62.074 27.452L54.494 31.242L54.494 34.93L52.65 34.008L52.65 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="56,39.3 48.6,35.6 48.6,28.2 56,31.9   "
                  d="M57.362 40.256L49.782 36.466L49.782 28.886L57.362 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,32.2 71.4,39.6 64,43.3 56.6,39.6 56.6,32.2 64,28.5   "
                  d="M73.137 32.983L73.137 40.563L65.557 44.353L57.977 40.563L57.977 32.983L65.557 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="64,43.3 71.4,39.6 71.4,32.2 64,35.9   "
                  d="M65.557 44.353L73.137 40.563L73.137 32.983L65.557 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,29.9 68.6,30.8 61.2,34.5 61.2,38.1 59.4,37.2 59.4,33.6   "
                  d="M68.425 30.627L70.269 31.549L62.689 35.339L62.689 39.027L60.845 38.105L60.845 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="64,43.3 56.6,39.6 56.6,32.2 64,35.9   "
                  d="M65.557 44.353L57.977 40.563L57.977 32.983L65.557 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,36.2 79.4,43.6 72,47.3 64.6,43.6 64.6,36.2 72,32.5   "
                  d="M81.332 37.081L81.332 44.661L73.752 48.451L66.172 44.661L66.172 37.081L73.752 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="72,47.3 79.4,43.6 79.4,36.2 72,39.9   "
                  d="M73.752 48.451L81.332 44.661L81.332 37.081L73.752 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,33.9 76.6,34.8 69.2,38.5 69.2,42.1 67.4,41.2 67.4,37.6   "
                  d="M76.62 34.725L78.464 35.647L70.883 39.437L70.883 43.124L69.04 42.202L69.04 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="72,47.3 64.6,43.6 64.6,36.2 72,39.9   "
                  d="M73.752 48.451L66.172 44.661L66.172 37.081L73.752 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,40.2 87.4,47.6 80,51.3 72.6,47.6 72.6,40.2 80,36.5   "
                  d="M89.526 41.178L89.526 48.758L81.946 52.548L74.366 48.758L74.366 41.178L81.946 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="80,51.3 87.4,47.6 87.4,40.2 80,43.9   "
                  d="M81.946 52.548L89.526 48.758L89.526 41.178L81.946 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,37.9 84.6,38.8 77.2,42.5 77.2,46.1 75.4,45.2 75.4,41.6   "
                  d="M84.814 38.822L86.658 39.744L79.078 43.534L79.078 47.222L77.234 46.3L77.234 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="80,51.3 72.6,47.6 72.6,40.2 80,43.9   "
                  d="M81.946 52.548L74.366 48.758L74.366 41.178L81.946 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,50.9 88,41.6 88,41 87.4,40.7 81.1,49.4   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L89.526 41.69L83.073 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,50.9 88,41.6 88,41 81.1,50.3   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L83.073 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,58.9 88,49.6 88,49 87.4,48.7 81.1,57.4   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L89.526 49.885L83.073 58.796Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,58.9 88,49.6 88,49 81.1,58.3   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L83.073 59.718Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,95.6 40,96.2 72,112.2 80,108.2 80,107.6 48,91.6   "
                  d="M40.973 97.926L40.973 98.54L73.752 114.93L81.946 110.832L81.946 110.218L49.168 93.828Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.2 40,96.2 40,95.6 72,111.6   "
                  d="M73.752 114.93L40.973 98.54L40.973 97.926L73.752 114.315Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.2 80,108.2 80,107.6 72,111.6   "
                  d="M73.752 114.93L81.946 110.832L81.946 110.218L73.752 114.315Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,88.2 55.4,95.6 48,99.3 40.6,95.6 40.6,88.2 48,84.5   "
                  d="M56.748 90.346L56.748 97.926L49.168 101.716L41.588 97.926L41.588 90.346L49.168 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="48,99.3 55.4,95.6 55.4,88.2 48,91.9   "
                  d="M49.168 101.716L56.748 97.926L56.748 90.346L49.168 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,85.9 52.6,86.8 45.2,90.5 45.2,94.1 43.4,93.2 43.4,89.6   "
                  d="M52.036 87.99L53.88 88.912L46.3 92.702L46.3 96.389L44.456 95.467L44.456 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="48,99.3 40.6,95.6 40.6,88.2 48,91.9   "
                  d="M49.168 101.716L41.588 97.926L41.588 90.346L49.168 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,92.2 63.4,99.6 56,103.3 48.6,99.6 48.6,92.2 56,88.5   "
                  d="M64.942 94.443L64.942 102.023L57.362 105.813L49.782 102.023L49.782 94.443L57.362 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="56,103.3 63.4,99.6 63.4,92.2 56,95.9   "
                  d="M57.362 105.813L64.942 102.023L64.942 94.443L57.362 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,89.9 60.6,90.8 53.2,94.5 53.2,98.1 51.4,97.2 51.4,93.6   "
                  d="M60.23 92.087L62.074 93.009L54.494 96.799L54.494 100.487L52.65 99.565L52.65 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="56,103.3 48.6,99.6 48.6,92.2 56,95.9   "
                  d="M57.362 105.813L49.782 102.023L49.782 94.443L57.362 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,96.2 71.4,103.6 64,107.3 56.6,103.6 56.6,96.2 64,92.5   "
                  d="M73.137 98.54L73.137 106.12L65.557 109.91L57.977 106.12L57.977 98.54L65.557 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="64,107.3 71.4,103.6 71.4,96.2 64,99.9   "
                  d="M65.557 109.91L73.137 106.12L73.137 98.54L65.557 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,93.9 68.6,94.8 61.2,98.5 61.2,102.1 59.4,101.2 59.4,97.6   "
                  d="M68.425 96.184L70.269 97.106L62.689 100.896L62.689 104.584L60.845 103.662L60.845 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="64,107.3 56.6,103.6 56.6,96.2 64,99.9   "
                  d="M65.557 109.91L57.977 106.12L57.977 98.54L65.557 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,100.2 79.4,107.6 72,111.3 64.6,107.6 64.6,100.2 72,96.5   "
                  d="M81.332 102.638L81.332 110.218L73.752 114.008L66.172 110.218L66.172 102.638L73.752 98.848Z"
                />
                <path
                  opacity={0.11}
                  points="72,111.3 79.4,107.6 79.4,100.2 72,103.9   "
                  d="M73.752 114.008L81.332 110.218L81.332 102.638L73.752 106.428Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,97.9 76.6,98.8 69.2,102.5 69.2,106.1 67.4,105.2 67.4,101.6   "
                  d="M76.62 100.282L78.464 101.204L70.883 104.994L70.883 108.681L69.04 107.759L69.04 104.072Z"
                />
                <path
                  opacity={0.29}
                  points="72,111.3 64.6,107.6 64.6,100.2 72,103.9   "
                  d="M73.752 114.008L66.172 110.218L66.172 102.638L73.752 106.428Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,87.6 40,88.2 72,104.2 80,100.2 80,99.6 48,83.6   "
                  d="M40.973 89.731L40.973 90.346L73.752 106.735L81.946 102.638L81.946 102.023L49.168 85.634Z"
                />
                <path
                  opacity={0.29}
                  points="72,104.2 40,88.2 40,87.6 72,103.6   "
                  d="M73.752 106.735L40.973 90.346L40.973 89.731L73.752 106.12Z"
                />
                <path
                  opacity={0.11}
                  points="72,104.2 80,100.2 80,99.6 72,103.6   "
                  d="M73.752 106.735L81.946 102.638L81.946 102.023L73.752 106.12Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,80.2 55.4,87.6 48,91.3 40.6,87.6 40.6,80.2 48,76.5   "
                  d="M56.748 82.151L56.748 89.731L49.168 93.521L41.588 89.731L41.588 82.151L49.168 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="48,91.3 55.4,87.6 55.4,80.2 48,83.9   "
                  d="M49.168 93.521L56.748 89.731L56.748 82.151L49.168 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,77.9 52.6,78.8 45.2,82.5 45.2,86.1 43.4,85.2 43.4,81.6   "
                  d="M52.036 79.795L53.88 80.717L46.3 84.507L46.3 88.195L44.456 87.273L44.456 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="48,91.3 40.6,87.6 40.6,80.2 48,83.9   "
                  d="M49.168 93.521L41.588 89.731L41.588 82.151L49.168 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,84.2 63.4,91.6 56,95.3 48.6,91.6 48.6,84.2 56,80.5   "
                  d="M64.942 86.248L64.942 93.828L57.362 97.618L49.782 93.828L49.782 86.248L57.362 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="56,95.3 63.4,91.6 63.4,84.2 56,87.9   "
                  d="M57.362 97.618L64.942 93.828L64.942 86.248L57.362 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,81.9 60.6,82.8 53.2,86.5 53.2,90.1 51.4,89.2 51.4,85.6   "
                  d="M60.23 83.892L62.074 84.814L54.494 88.604L54.494 92.292L52.65 91.37L52.65 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="56,95.3 48.6,91.6 48.6,84.2 56,87.9   "
                  d="M57.362 97.618L49.782 93.828L49.782 86.248L57.362 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,88.2 71.4,95.6 64,99.3 56.6,95.6 56.6,88.2 64,84.5   "
                  d="M73.137 90.346L73.137 97.926L65.557 101.716L57.977 97.926L57.977 90.346L65.557 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="64,99.3 71.4,95.6 71.4,88.2 64,91.9   "
                  d="M65.557 101.716L73.137 97.926L73.137 90.346L65.557 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,85.9 68.6,86.8 61.2,90.5 61.2,94.1 59.4,93.2 59.4,89.6   "
                  d="M68.425 87.99L70.269 88.912L62.689 92.702L62.689 96.389L60.845 95.467L60.845 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="64,99.3 56.6,95.6 56.6,88.2 64,91.9   "
                  d="M65.557 101.716L57.977 97.926L57.977 90.346L65.557 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,92.2 79.4,99.6 72,103.3 64.6,99.6 64.6,92.2 72,88.5   "
                  d="M81.332 94.443L81.332 102.023L73.752 105.813L66.172 102.023L66.172 94.443L73.752 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="72,103.3 79.4,99.6 79.4,92.2 72,95.9   "
                  d="M73.752 105.813L81.332 102.023L81.332 94.443L73.752 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,89.9 76.6,90.8 69.2,94.5 69.2,98.1 67.4,97.2 67.4,93.6   "
                  d="M76.62 92.087L78.464 93.009L70.883 96.799L70.883 100.487L69.04 99.565L69.04 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="72,103.3 64.6,99.6 64.6,92.2 72,95.9   "
                  d="M73.752 105.813L66.172 102.023L66.172 94.443L73.752 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,102.9 80,93.6 80,93 79.4,92.7 73.1,101.4   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L81.332 94.955L74.878 103.867Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,102.9 80,93.6 80,93 73.1,102.3   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L74.878 104.789Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,79.6 40,80.2 72,96.2 80,92.2 80,91.6 48,75.6   "
                  d="M40.973 81.536L40.973 82.151L73.752 98.54L81.946 94.443L81.946 93.828L49.168 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="72,96.2 40,80.2 40,79.6 72,95.6   "
                  d="M73.752 98.54L40.973 82.151L40.973 81.536L73.752 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="72,96.2 80,92.2 80,91.6 72,95.6   "
                  d="M73.752 98.54L81.946 94.443L81.946 93.828L73.752 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,110.9 80,101.6 80,101 79.4,100.7 73.1,109.4   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L81.332 103.15L74.878 112.061Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,110.9 80,101.6 80,101 73.1,110.3   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L74.878 112.983Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,72.2 55.4,79.6 48,83.3 40.6,79.6 40.6,72.2 48,68.5   "
                  d="M56.748 73.956L56.748 81.536L49.168 85.327L41.588 81.536L41.588 73.956L49.168 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="48,83.3 55.4,79.6 55.4,72.2 48,75.9   "
                  d="M49.168 85.327L56.748 81.536L56.748 73.956L49.168 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,69.9 52.6,70.8 45.2,74.5 45.2,78.1 43.4,77.2 43.4,73.6   "
                  d="M52.036 71.601L53.88 72.522L46.3 76.312L46.3 80L44.456 79.078L44.456 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="48,83.3 40.6,79.6 40.6,72.2 48,75.9   "
                  d="M49.168 85.327L41.588 81.536L41.588 73.956L49.168 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,76.2 63.4,83.6 56,87.3 48.6,83.6 48.6,76.2 56,72.5   "
                  d="M64.942 78.054L64.942 85.634L57.362 89.424L49.782 85.634L49.782 78.054L57.362 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="56,87.3 63.4,83.6 63.4,76.2 56,79.9   "
                  d="M57.362 89.424L64.942 85.634L64.942 78.054L57.362 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,73.9 60.6,74.8 53.2,78.5 53.2,82.1 51.4,81.2 51.4,77.6   "
                  d="M60.23 75.698L62.074 76.62L54.494 80.41L54.494 84.097L52.65 83.175L52.65 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="56,87.3 48.6,83.6 48.6,76.2 56,79.9   "
                  d="M57.362 89.424L49.782 85.634L49.782 78.054L57.362 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,80.2 71.4,87.6 64,91.3 56.6,87.6 56.6,80.2 64,76.5   "
                  d="M73.137 82.151L73.137 89.731L65.557 93.521L57.977 89.731L57.977 82.151L65.557 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="64,91.3 71.4,87.6 71.4,80.2 64,83.9   "
                  d="M65.557 93.521L73.137 89.731L73.137 82.151L65.557 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,77.9 68.6,78.8 61.2,82.5 61.2,86.1 59.4,85.2 59.4,81.6   "
                  d="M68.425 79.795L70.269 80.717L62.689 84.507L62.689 88.195L60.845 87.273L60.845 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="64,91.3 56.6,87.6 56.6,80.2 64,83.9   "
                  d="M65.557 93.521L57.977 89.731L57.977 82.151L65.557 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,84.2 79.4,91.6 72,95.3 64.6,91.6 64.6,84.2 72,80.5   "
                  d="M81.332 86.248L81.332 93.828L73.752 97.618L66.172 93.828L66.172 86.248L73.752 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="72,95.3 79.4,91.6 79.4,84.2 72,87.9   "
                  d="M73.752 97.618L81.332 93.828L81.332 86.248L73.752 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,81.9 76.6,82.8 69.2,86.5 69.2,90.1 67.4,89.2 67.4,85.6   "
                  d="M76.62 83.892L78.464 84.814L70.883 88.604L70.883 92.292L69.04 91.37L69.04 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="72,95.3 64.6,91.6 64.6,84.2 72,87.9   "
                  d="M73.752 97.618L66.172 93.828L66.172 86.248L73.752 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,95 80,85.7 80,85.1 79.4,84.8 73.1,93.5   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L81.332 86.863L74.878 95.775Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,95 80,85.7 80,85.1 73.1,94.4   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L74.878 96.697Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,71.6 40,72.2 72,88.2 80,84.2 80,83.6 48,67.6   "
                  d="M40.973 73.342L40.973 73.956L73.752 90.346L81.946 86.248L81.946 85.634L49.168 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="72,88.2 40,72.2 40,71.6 72,87.6   "
                  d="M73.752 90.346L40.973 73.956L40.973 73.342L73.752 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="72,88.2 80,84.2 80,83.6 72,87.6   "
                  d="M73.752 90.346L81.946 86.248L81.946 85.634L73.752 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,64.2 55.4,71.6 48,75.3 40.6,71.6 40.6,64.2 48,60.5   "
                  d="M56.748 65.762L56.748 73.342L49.168 77.132L41.588 73.342L41.588 65.762L49.168 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="48,75.3 55.4,71.6 55.4,64.2 48,67.9   "
                  d="M49.168 77.132L56.748 73.342L56.748 65.762L49.168 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,61.9 52.6,62.8 45.2,66.5 45.2,70.1 43.4,69.2 43.4,65.6   "
                  d="M52.036 63.406L53.88 64.328L46.3 68.118L46.3 71.805L44.456 70.883L44.456 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="48,75.3 40.6,71.6 40.6,64.2 48,67.9   "
                  d="M49.168 77.132L41.588 73.342L41.588 65.762L49.168 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,68.2 63.4,75.6 56,79.3 48.6,75.6 48.6,68.2 56,64.5   "
                  d="M64.942 69.859L64.942 77.439L57.362 81.229L49.782 77.439L49.782 69.859L57.362 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="56,79.3 63.4,75.6 63.4,68.2 56,71.9   "
                  d="M57.362 81.229L64.942 77.439L64.942 69.859L57.362 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,65.9 60.6,66.8 53.2,70.5 53.2,74.1 51.4,73.2 51.4,69.6   "
                  d="M60.23 67.503L62.074 68.425L54.494 72.215L54.494 75.903L52.65 74.981L52.65 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="56,79.3 48.6,75.6 48.6,68.2 56,71.9   "
                  d="M57.362 81.229L49.782 77.439L49.782 69.859L57.362 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,72.2 71.4,79.6 64,83.3 56.6,79.6 56.6,72.2 64,68.5   "
                  d="M73.137 73.956L73.137 81.536L65.557 85.327L57.977 81.536L57.977 73.956L65.557 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="64,83.3 71.4,79.6 71.4,72.2 64,75.9   "
                  d="M65.557 85.327L73.137 81.536L73.137 73.956L65.557 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,69.9 68.6,70.8 61.2,74.5 61.2,78.1 59.4,77.2 59.4,73.6   "
                  d="M68.425 71.601L70.269 72.522L62.689 76.312L62.689 80L60.845 79.078L60.845 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="64,83.3 56.6,79.6 56.6,72.2 64,75.9   "
                  d="M65.557 85.327L57.977 81.536L57.977 73.956L65.557 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,76.2 79.4,83.6 72,87.3 64.6,83.6 64.6,76.2 72,72.5   "
                  d="M81.332 78.054L81.332 85.634L73.752 89.424L66.172 85.634L66.172 78.054L73.752 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="72,87.3 79.4,83.6 79.4,76.2 72,79.9   "
                  d="M73.752 89.424L81.332 85.634L81.332 78.054L73.752 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,73.9 76.6,74.8 69.2,78.5 69.2,82.1 67.4,81.2 67.4,77.6   "
                  d="M76.62 75.698L78.464 76.62L70.883 80.41L70.883 84.097L69.04 83.175L69.04 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="72,87.3 64.6,83.6 64.6,76.2 72,79.9   "
                  d="M73.752 89.424L66.172 85.634L66.172 78.054L73.752 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,63.6 40,64.2 72,80.2 80,76.2 80,75.6 48,59.6   "
                  d="M40.973 65.147L40.973 65.762L73.752 82.151L81.946 78.054L81.946 77.439L49.168 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="72,80.2 40,64.2 40,63.6 72,79.6   "
                  d="M73.752 82.151L40.973 65.762L40.973 65.147L73.752 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="72,80.2 80,76.2 80,75.6 72,79.6   "
                  d="M73.752 82.151L81.946 78.054L81.946 77.439L73.752 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,56.2 55.4,63.6 48,67.3 40.6,63.6 40.6,56.2 48,52.5   "
                  d="M56.748 57.567L56.748 65.147L49.168 68.937L41.588 65.147L41.588 57.567L49.168 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="48,67.3 55.4,63.6 55.4,56.2 48,59.9   "
                  d="M49.168 68.937L56.748 65.147L56.748 57.567L49.168 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,53.9 52.6,54.8 45.2,58.5 45.2,62.1 43.4,61.2 43.4,57.6   "
                  d="M52.036 55.211L53.88 56.133L46.3 59.923L46.3 63.611L44.456 62.689L44.456 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="48,67.3 40.6,63.6 40.6,56.2 48,59.9   "
                  d="M49.168 68.937L41.588 65.147L41.588 57.567L49.168 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,60.2 63.4,67.6 56,71.3 48.6,67.6 48.6,60.2 56,56.5   "
                  d="M64.942 61.665L64.942 69.245L57.362 73.035L49.782 69.245L49.782 61.665L57.362 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="56,71.3 63.4,67.6 63.4,60.2 56,63.9   "
                  d="M57.362 73.035L64.942 69.245L64.942 61.665L57.362 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,57.9 60.6,58.8 53.2,62.5 53.2,66.1 51.4,65.2 51.4,61.6   "
                  d="M60.23 59.309L62.074 60.23L54.494 64.02L54.494 67.708L52.65 66.786L52.65 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="56,71.3 48.6,67.6 48.6,60.2 56,63.9   "
                  d="M57.362 73.035L49.782 69.245L49.782 61.665L57.362 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,64.2 71.4,71.6 64,75.3 56.6,71.6 56.6,64.2 64,60.5   "
                  d="M73.137 65.762L73.137 73.342L65.557 77.132L57.977 73.342L57.977 65.762L65.557 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="64,75.3 71.4,71.6 71.4,64.2 64,67.9   "
                  d="M65.557 77.132L73.137 73.342L73.137 65.762L65.557 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,61.9 68.6,62.8 61.2,66.5 61.2,70.1 59.4,69.2 59.4,65.6   "
                  d="M68.425 63.406L70.269 64.328L62.689 68.118L62.689 71.805L60.845 70.883L60.845 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="64,75.3 56.6,71.6 56.6,64.2 64,67.9   "
                  d="M65.557 77.132L57.977 73.342L57.977 65.762L65.557 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,68.2 79.4,75.6 72,79.3 64.6,75.6 64.6,68.2 72,64.5   "
                  d="M81.332 69.859L81.332 77.439L73.752 81.229L66.172 77.439L66.172 69.859L73.752 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="72,79.3 79.4,75.6 79.4,68.2 72,71.9   "
                  d="M73.752 81.229L81.332 77.439L81.332 69.859L73.752 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,65.9 76.6,66.8 69.2,70.5 69.2,74.1 67.4,73.2 67.4,69.6   "
                  d="M76.62 67.503L78.464 68.425L70.883 72.215L70.883 75.903L69.04 74.981L69.04 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="72,79.3 64.6,75.6 64.6,68.2 72,71.9   "
                  d="M73.752 81.229L66.172 77.439L66.172 69.859L73.752 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,78.9 80,69.6 80,69 79.4,68.7 73.1,77.4   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L81.332 70.371L74.878 79.283Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,78.9 80,69.6 80,69 73.1,78.3   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L74.878 80.205Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,86.9 80,77.6 80,77 79.4,76.7 73.1,85.4   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L81.332 78.566L74.878 87.478Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,86.9 80,77.6 80,77 73.1,86.3   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L74.878 88.399Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,55.6 40,56.2 72,72.2 80,68.2 80,67.6 48,51.6   "
                  d="M40.973 56.953L40.973 57.567L73.752 73.956L81.946 69.859L81.946 69.245L49.168 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="72,72.2 40,56.2 40,55.6 72,71.6   "
                  d="M73.752 73.956L40.973 57.567L40.973 56.953L73.752 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="72,72.2 80,68.2 80,67.6 72,71.6   "
                  d="M73.752 73.956L81.946 69.859L81.946 69.245L73.752 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,48.2 55.4,55.6 48,59.3 40.6,55.6 40.6,48.2 48,44.5   "
                  d="M56.748 49.373L56.748 56.953L49.168 60.743L41.588 56.953L41.588 49.373L49.168 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="48,59.3 55.4,55.6 55.4,48.2 48,51.9   "
                  d="M49.168 60.743L56.748 56.953L56.748 49.373L49.168 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,45.9 52.6,46.8 45.2,50.5 45.2,54.1 43.4,53.2 43.4,49.6   "
                  d="M52.036 47.017L53.88 47.939L46.3 51.729L46.3 55.416L44.456 54.494L44.456 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="48,59.3 40.6,55.6 40.6,48.2 48,51.9   "
                  d="M49.168 60.743L41.588 56.953L41.588 49.373L49.168 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,52.2 63.4,59.6 56,63.3 48.6,59.6 48.6,52.2 56,48.5   "
                  d="M64.942 53.47L64.942 61.05L57.362 64.84L49.782 61.05L49.782 53.47L57.362 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="56,63.3 63.4,59.6 63.4,52.2 56,55.9   "
                  d="M57.362 64.84L64.942 61.05L64.942 53.47L57.362 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,49.9 60.6,50.8 53.2,54.5 53.2,58.1 51.4,57.2 51.4,53.6   "
                  d="M60.23 51.114L62.074 52.036L54.494 55.826L54.494 59.513L52.65 58.592L52.65 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="56,63.3 48.6,59.6 48.6,52.2 56,55.9   "
                  d="M57.362 64.84L49.782 61.05L49.782 53.47L57.362 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,56.2 71.4,63.6 64,67.3 56.6,63.6 56.6,56.2 64,52.5   "
                  d="M73.137 57.567L73.137 65.147L65.557 68.937L57.977 65.147L57.977 57.567L65.557 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="64,67.3 71.4,63.6 71.4,56.2 64,59.9   "
                  d="M65.557 68.937L73.137 65.147L73.137 57.567L65.557 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,53.9 68.6,54.8 61.2,58.5 61.2,62.1 59.4,61.2 59.4,57.6   "
                  d="M68.425 55.211L70.269 56.133L62.689 59.923L62.689 63.611L60.845 62.689L60.845 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="64,67.3 56.6,63.6 56.6,56.2 64,59.9   "
                  d="M65.557 68.937L57.977 65.147L57.977 57.567L65.557 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,60.2 79.4,67.6 72,71.3 64.6,67.6 64.6,60.2 72,56.5   "
                  d="M81.332 61.665L81.332 69.245L73.752 73.035L66.172 69.245L66.172 61.665L73.752 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="72,71.3 79.4,67.6 79.4,60.2 72,63.9   "
                  d="M73.752 73.035L81.332 69.245L81.332 61.665L73.752 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,57.9 76.6,58.8 69.2,62.5 69.2,66.1 67.4,65.2 67.4,61.6   "
                  d="M76.62 59.309L78.464 60.23L70.883 64.02L70.883 67.708L69.04 66.786L69.04 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="72,71.3 64.6,67.6 64.6,60.2 72,63.9   "
                  d="M73.752 73.035L66.172 69.245L66.172 61.665L73.752 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,71 80,61.7 80,61.1 79.4,60.8 73.1,69.5   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L81.332 62.279L74.878 71.191Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,71 80,61.7 80,61.1 73.1,70.4   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L74.878 72.113Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,47.6 40,48.2 72,64.2 80,60.2 80,59.6 48,43.6   "
                  d="M40.973 48.758L40.973 49.373L73.752 65.762L81.946 61.665L81.946 61.05L49.168 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="72,64.2 40,48.2 40,47.6 72,63.6   "
                  d="M73.752 65.762L40.973 49.373L40.973 48.758L73.752 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="72,64.2 80,60.2 80,59.6 72,63.6   "
                  d="M73.752 65.762L81.946 61.665L81.946 61.05L73.752 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,44.2 63.4,51.6 56,55.3 48.6,51.6 48.6,44.2 56,40.5   "
                  d="M64.942 45.275L64.942 52.855L57.362 56.645L49.782 52.855L49.782 45.275L57.362 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="56,55.3 63.4,51.6 63.4,44.2 56,47.9   "
                  d="M57.362 56.645L64.942 52.855L64.942 45.275L57.362 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,41.9 60.6,42.8 53.2,46.5 53.2,50.1 51.4,49.2 51.4,45.6   "
                  d="M60.23 42.919L62.074 43.841L54.494 47.631L54.494 51.319L52.65 50.397L52.65 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="56,55.3 48.6,51.6 48.6,44.2 56,47.9   "
                  d="M57.362 56.645L49.782 52.855L49.782 45.275L57.362 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,48.2 71.4,55.6 64,59.3 56.6,55.6 56.6,48.2 64,44.5   "
                  d="M73.137 49.373L73.137 56.953L65.557 60.743L57.977 56.953L57.977 49.373L65.557 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="64,59.3 71.4,55.6 71.4,48.2 64,51.9   "
                  d="M65.557 60.743L73.137 56.953L73.137 49.373L65.557 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,45.9 68.6,46.8 61.2,50.5 61.2,54.1 59.4,53.2 59.4,49.6   "
                  d="M68.425 47.017L70.269 47.939L62.689 51.729L62.689 55.416L60.845 54.494L60.845 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="64,59.3 56.6,55.6 56.6,48.2 64,51.9   "
                  d="M65.557 60.743L57.977 56.953L57.977 49.373L65.557 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,52.2 79.4,59.6 72,63.3 64.6,59.6 64.6,52.2 72,48.5   "
                  d="M81.332 53.47L81.332 61.05L73.752 64.84L66.172 61.05L66.172 53.47L73.752 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="72,63.3 79.4,59.6 79.4,52.2 72,55.9   "
                  d="M73.752 64.84L81.332 61.05L81.332 53.47L73.752 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,49.9 76.6,50.8 69.2,54.5 69.2,58.1 67.4,57.2 67.4,53.6   "
                  d="M76.62 51.114L78.464 52.036L70.883 55.826L70.883 59.513L69.04 58.592L69.04 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="72,63.3 64.6,59.6 64.6,52.2 72,55.9   "
                  d="M73.752 64.84L66.172 61.05L66.172 53.47L73.752 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,39.6 40,40.2 72,56.2 80,52.2 80,51.6 48,35.6   "
                  d="M40.973 40.563L40.973 41.178L73.752 57.567L81.946 53.47L81.946 52.855L49.168 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="72,56.2 40,40.2 40,39.6 72,55.6   "
                  d="M73.752 57.567L40.973 41.178L40.973 40.563L73.752 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="72,56.2 80,52.2 80,51.6 72,55.6   "
                  d="M73.752 57.567L81.946 53.47L81.946 52.855L73.752 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,36.2 63.4,43.6 56,47.3 48.6,43.6 48.6,36.2 56,32.5   "
                  d="M64.942 37.081L64.942 44.661L57.362 48.451L49.782 44.661L49.782 37.081L57.362 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="56,47.3 63.4,43.6 63.4,36.2 56,39.9   "
                  d="M57.362 48.451L64.942 44.661L64.942 37.081L57.362 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,33.9 60.6,34.8 53.2,38.5 53.2,42.1 51.4,41.2 51.4,37.6   "
                  d="M60.23 34.725L62.074 35.647L54.494 39.437L54.494 43.124L52.65 42.202L52.65 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="56,47.3 48.6,43.6 48.6,36.2 56,39.9   "
                  d="M57.362 48.451L49.782 44.661L49.782 37.081L57.362 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,40.2 71.4,47.6 64,51.3 56.6,47.6 56.6,40.2 64,36.5   "
                  d="M73.137 41.178L73.137 48.758L65.557 52.548L57.977 48.758L57.977 41.178L65.557 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="64,51.3 71.4,47.6 71.4,40.2 64,43.9   "
                  d="M65.557 52.548L73.137 48.758L73.137 41.178L65.557 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,37.9 68.6,38.8 61.2,42.5 61.2,46.1 59.4,45.2 59.4,41.6   "
                  d="M68.425 38.822L70.269 39.744L62.689 43.534L62.689 47.222L60.845 46.3L60.845 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="64,51.3 56.6,47.6 56.6,40.2 64,43.9   "
                  d="M65.557 52.548L57.977 48.758L57.977 41.178L65.557 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,44.2 79.4,51.6 72,55.3 64.6,51.6 64.6,44.2 72,40.5   "
                  d="M81.332 45.275L81.332 52.855L73.752 56.645L66.172 52.855L66.172 45.275L73.752 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="72,55.3 79.4,51.6 79.4,44.2 72,47.9   "
                  d="M73.752 56.645L81.332 52.855L81.332 45.275L73.752 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,41.9 76.6,42.8 69.2,46.5 69.2,50.1 67.4,49.2 67.4,45.6   "
                  d="M76.62 42.919L78.464 43.841L70.883 47.631L70.883 51.319L69.04 50.397L69.04 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="72,55.3 64.6,51.6 64.6,44.2 72,47.9   "
                  d="M73.752 56.645L66.172 52.855L66.172 45.275L73.752 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,54.9 80,45.6 80,45 79.4,44.7 73.1,53.4   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L81.332 45.787L74.878 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,54.9 80,45.6 80,45 73.1,54.3   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L74.878 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,62.9 80,53.6 80,53 79.4,52.7 73.1,61.4   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L81.332 53.982L74.878 62.894Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,62.9 80,53.6 80,53 73.1,62.3   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L74.878 63.816Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="70.8,48 70.8,112 72,112.6 73.2,112 73.2,48 72,47.4   "
                  d="M72.522 49.168L72.522 114.725L73.752 115.339L74.981 114.725L74.981 49.168L73.752 48.553Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.6 70.8,112 70.8,48 72,48.6   "
                  d="M73.752 115.339L72.522 114.725L72.522 49.168L73.752 49.782Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.6 73.2,112 73.2,48 72,48.6   "
                  d="M73.752 115.339L74.981 114.725L74.981 49.168L73.752 49.782Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-2" className="lvl-1" transform={selectedGroup === 2 ? 'translate(50%,50%)':'matrix(-1 0 0 1 536 160)'} onClick={() => handleClick(2)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,72 24,72.6 25.2,72 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 73.752L24.584 74.366L25.813 73.752L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,72.6 22.8,72 22.8,8 24,8.6   "
                  d="M24.584 74.366L23.355 73.752L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,72.6 25.2,72 25.2,8 24,8.6   "
                  d="M24.584 74.366L25.813 73.752L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,88 56,88.6 57.2,88 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 90.141L57.362 90.755L58.592 90.141L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,88.6 54.8,88 54.8,24 56,24.6   "
                  d="M57.362 90.755L56.133 90.141L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,88.6 57.2,88 57.2,24 56,24.6   "
                  d="M57.362 90.755L58.592 90.141L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,80 8,80.6 9.2,80 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 81.946L8.195 82.561L9.424 81.946L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,80.6 6.8,80 6.8,16 8,16.6   "
                  d="M8.195 82.561L6.965 81.946L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,80.6 9.2,80 9.2,16 8,16.6   "
                  d="M8.195 82.561L9.424 81.946L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,79.6 8,80.2 40,96.2 48,92.2 48,91.6 16,75.6   "
                  d="M8.195 81.536L8.195 82.151L40.973 98.54L49.168 94.443L49.168 93.828L16.389 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.2 8,80.2 8,79.6 40,95.6   "
                  d="M40.973 98.54L8.195 82.151L8.195 81.536L40.973 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.2 48,92.2 48,91.6 40,95.6   "
                  d="M40.973 98.54L49.168 94.443L49.168 93.828L40.973 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,72.2 23.4,79.6 16,83.3 8.6,79.6 8.6,72.2 16,68.5   "
                  d="M23.969 73.956L23.969 81.536L16.389 85.327L8.809 81.536L8.809 73.956L16.389 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="16,83.3 23.4,79.6 23.4,72.2 16,75.9   "
                  d="M16.389 85.327L23.969 81.536L23.969 73.956L16.389 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,69.9 20.6,70.8 13.2,74.5 13.2,78.1 11.4,77.2 11.4,73.6   "
                  d="M19.257 71.601L21.101 72.522L13.521 76.312L13.521 80L11.677 79.078L11.677 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="16,83.3 8.6,79.6 8.6,72.2 16,75.9   "
                  d="M16.389 85.327L8.809 81.536L8.809 73.956L16.389 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,76.2 31.4,83.6 24,87.3 16.6,83.6 16.6,76.2 24,72.5   "
                  d="M32.164 78.054L32.164 85.634L24.584 89.424L17.004 85.634L17.004 78.054L24.584 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="24,87.3 31.4,83.6 31.4,76.2 24,79.9   "
                  d="M24.584 89.424L32.164 85.634L32.164 78.054L24.584 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,73.9 28.6,74.8 21.2,78.5 21.2,82.1 19.4,81.2 19.4,77.6   "
                  d="M27.452 75.698L29.296 76.62L21.716 80.41L21.716 84.097L19.872 83.175L19.872 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="24,87.3 16.6,83.6 16.6,76.2 24,79.9   "
                  d="M24.584 89.424L17.004 85.634L17.004 78.054L24.584 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,80.2 39.4,87.6 32,91.3 24.6,87.6 24.6,80.2 32,76.5   "
                  d="M40.359 82.151L40.359 89.731L32.778 93.521L25.198 89.731L25.198 82.151L32.778 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="32,91.3 39.4,87.6 39.4,80.2 32,83.9   "
                  d="M32.778 93.521L40.359 89.731L40.359 82.151L32.778 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,77.9 36.6,78.8 29.2,82.5 29.2,86.1 27.4,85.2 27.4,81.6   "
                  d="M35.647 79.795L37.49 80.717L29.91 84.507L29.91 88.195L28.067 87.273L28.067 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="32,91.3 24.6,87.6 24.6,80.2 32,83.9   "
                  d="M32.778 93.521L25.198 89.731L25.198 82.151L32.778 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,84.2 47.4,91.6 40,95.3 32.6,91.6 32.6,84.2 40,80.5   "
                  d="M48.553 86.248L48.553 93.828L40.973 97.618L33.393 93.828L33.393 86.248L40.973 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="40,95.3 47.4,91.6 47.4,84.2 40,87.9   "
                  d="M40.973 97.618L48.553 93.828L48.553 86.248L40.973 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,81.9 44.6,82.8 37.2,86.5 37.2,90.1 35.4,89.2 35.4,85.6   "
                  d="M43.841 83.892L45.685 84.814L38.105 88.604L38.105 92.292L36.261 91.37L36.261 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="40,95.3 32.6,91.6 32.6,84.2 40,87.9   "
                  d="M40.973 97.618L33.393 93.828L33.393 86.248L40.973 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,71.6 8,72.2 40,88.2 48,84.2 48,83.6 16,67.6   "
                  d="M8.195 73.342L8.195 73.956L40.973 90.346L49.168 86.248L49.168 85.634L16.389 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="40,88.2 8,72.2 8,71.6 40,87.6   "
                  d="M40.973 90.346L8.195 73.956L8.195 73.342L40.973 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="40,88.2 48,84.2 48,83.6 40,87.6   "
                  d="M40.973 90.346L49.168 86.248L49.168 85.634L40.973 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,64.2 23.4,71.6 16,75.3 8.6,71.6 8.6,64.2 16,60.5   "
                  d="M23.969 65.762L23.969 73.342L16.389 77.132L8.809 73.342L8.809 65.762L16.389 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="16,75.3 23.4,71.6 23.4,64.2 16,67.9   "
                  d="M16.389 77.132L23.969 73.342L23.969 65.762L16.389 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,61.9 20.6,62.8 13.2,66.5 13.2,70.1 11.4,69.2 11.4,65.6   "
                  d="M19.257 63.406L21.101 64.328L13.521 68.118L13.521 71.805L11.677 70.883L11.677 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="16,75.3 8.6,71.6 8.6,64.2 16,67.9   "
                  d="M16.389 77.132L8.809 73.342L8.809 65.762L16.389 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,68.2 31.4,75.6 24,79.3 16.6,75.6 16.6,68.2 24,64.5   "
                  d="M32.164 69.859L32.164 77.439L24.584 81.229L17.004 77.439L17.004 69.859L24.584 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="24,79.3 31.4,75.6 31.4,68.2 24,71.9   "
                  d="M24.584 81.229L32.164 77.439L32.164 69.859L24.584 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,65.9 28.6,66.8 21.2,70.5 21.2,74.1 19.4,73.2 19.4,69.6   "
                  d="M27.452 67.503L29.296 68.425L21.716 72.215L21.716 75.903L19.872 74.981L19.872 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="24,79.3 16.6,75.6 16.6,68.2 24,71.9   "
                  d="M24.584 81.229L17.004 77.439L17.004 69.859L24.584 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,72.2 39.4,79.6 32,83.3 24.6,79.6 24.6,72.2 32,68.5   "
                  d="M40.359 73.956L40.359 81.536L32.778 85.327L25.198 81.536L25.198 73.956L32.778 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="32,83.3 39.4,79.6 39.4,72.2 32,75.9   "
                  d="M32.778 85.327L40.359 81.536L40.359 73.956L32.778 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,69.9 36.6,70.8 29.2,74.5 29.2,78.1 27.4,77.2 27.4,73.6   "
                  d="M35.647 71.601L37.49 72.522L29.91 76.312L29.91 80L28.067 79.078L28.067 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="32,83.3 24.6,79.6 24.6,72.2 32,75.9   "
                  d="M32.778 85.327L25.198 81.536L25.198 73.956L32.778 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,76.2 47.4,83.6 40,87.3 32.6,83.6 32.6,76.2 40,72.5   "
                  d="M48.553 78.054L48.553 85.634L40.973 89.424L33.393 85.634L33.393 78.054L40.973 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="40,87.3 47.4,83.6 47.4,76.2 40,79.9   "
                  d="M40.973 89.424L48.553 85.634L48.553 78.054L40.973 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,73.9 44.6,74.8 37.2,78.5 37.2,82.1 35.4,81.2 35.4,77.6   "
                  d="M43.841 75.698L45.685 76.62L38.105 80.41L38.105 84.097L36.261 83.175L36.261 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="40,87.3 32.6,83.6 32.6,76.2 40,79.9   "
                  d="M40.973 89.424L33.393 85.634L33.393 78.054L40.973 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,63.6 8,64.2 40,80.2 48,76.2 48,75.6 16,59.6   "
                  d="M8.195 65.147L8.195 65.762L40.973 82.151L49.168 78.054L49.168 77.439L16.389 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="40,80.2 8,64.2 8,63.6 40,79.6   "
                  d="M40.973 82.151L8.195 65.762L8.195 65.147L40.973 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="40,80.2 48,76.2 48,75.6 40,79.6   "
                  d="M40.973 82.151L49.168 78.054L49.168 77.439L40.973 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,56.2 23.4,63.6 16,67.3 8.6,63.6 8.6,56.2 16,52.5   "
                  d="M23.969 57.567L23.969 65.147L16.389 68.937L8.809 65.147L8.809 57.567L16.389 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="16,67.3 23.4,63.6 23.4,56.2 16,59.9   "
                  d="M16.389 68.937L23.969 65.147L23.969 57.567L16.389 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,53.9 20.6,54.8 13.2,58.5 13.2,62.1 11.4,61.2 11.4,57.6   "
                  d="M19.257 55.211L21.101 56.133L13.521 59.923L13.521 63.611L11.677 62.689L11.677 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="16,67.3 8.6,63.6 8.6,56.2 16,59.9   "
                  d="M16.389 68.937L8.809 65.147L8.809 57.567L16.389 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,60.2 31.4,67.6 24,71.3 16.6,67.6 16.6,60.2 24,56.5   "
                  d="M32.164 61.665L32.164 69.245L24.584 73.035L17.004 69.245L17.004 61.665L24.584 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="24,71.3 31.4,67.6 31.4,60.2 24,63.9   "
                  d="M24.584 73.035L32.164 69.245L32.164 61.665L24.584 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,57.9 28.6,58.8 21.2,62.5 21.2,66.1 19.4,65.2 19.4,61.6   "
                  d="M27.452 59.309L29.296 60.23L21.716 64.02L21.716 67.708L19.872 66.786L19.872 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="24,71.3 16.6,67.6 16.6,60.2 24,63.9   "
                  d="M24.584 73.035L17.004 69.245L17.004 61.665L24.584 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,64.2 39.4,71.6 32,75.3 24.6,71.6 24.6,64.2 32,60.5   "
                  d="M40.359 65.762L40.359 73.342L32.778 77.132L25.198 73.342L25.198 65.762L32.778 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="32,75.3 39.4,71.6 39.4,64.2 32,67.9   "
                  d="M32.778 77.132L40.359 73.342L40.359 65.762L32.778 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,61.9 36.6,62.8 29.2,66.5 29.2,70.1 27.4,69.2 27.4,65.6   "
                  d="M35.647 63.406L37.49 64.328L29.91 68.118L29.91 71.805L28.067 70.883L28.067 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="32,75.3 24.6,71.6 24.6,64.2 32,67.9   "
                  d="M32.778 77.132L25.198 73.342L25.198 65.762L32.778 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,68.2 47.4,75.6 40,79.3 32.6,75.6 32.6,68.2 40,64.5   "
                  d="M48.553 69.859L48.553 77.439L40.973 81.229L33.393 77.439L33.393 69.859L40.973 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="40,79.3 47.4,75.6 47.4,68.2 40,71.9   "
                  d="M40.973 81.229L48.553 77.439L48.553 69.859L40.973 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,65.9 44.6,66.8 37.2,70.5 37.2,74.1 35.4,73.2 35.4,69.6   "
                  d="M43.841 67.503L45.685 68.425L38.105 72.215L38.105 75.903L36.261 74.981L36.261 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="40,79.3 32.6,75.6 32.6,68.2 40,71.9   "
                  d="M40.973 81.229L33.393 77.439L33.393 69.859L40.973 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,55.6 8,56.2 40,72.2 48,68.2 48,67.6 16,51.6   "
                  d="M8.195 56.953L8.195 57.567L40.973 73.956L49.168 69.859L49.168 69.245L16.389 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="40,72.2 8,56.2 8,55.6 40,71.6   "
                  d="M40.973 73.956L8.195 57.567L8.195 56.953L40.973 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="40,72.2 48,68.2 48,67.6 40,71.6   "
                  d="M40.973 73.956L49.168 69.859L49.168 69.245L40.973 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,48.2 23.4,55.6 16,59.3 8.6,55.6 8.6,48.2 16,44.5   "
                  d="M23.969 49.373L23.969 56.953L16.389 60.743L8.809 56.953L8.809 49.373L16.389 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="16,59.3 23.4,55.6 23.4,48.2 16,51.9   "
                  d="M16.389 60.743L23.969 56.953L23.969 49.373L16.389 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,45.9 20.6,46.8 13.2,50.5 13.2,54.1 11.4,53.2 11.4,49.6   "
                  d="M19.257 47.017L21.101 47.939L13.521 51.729L13.521 55.416L11.677 54.494L11.677 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="16,59.3 8.6,55.6 8.6,48.2 16,51.9   "
                  d="M16.389 60.743L8.809 56.953L8.809 49.373L16.389 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,52.2 31.4,59.6 24,63.3 16.6,59.6 16.6,52.2 24,48.5   "
                  d="M32.164 53.47L32.164 61.05L24.584 64.84L17.004 61.05L17.004 53.47L24.584 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="24,63.3 31.4,59.6 31.4,52.2 24,55.9   "
                  d="M24.584 64.84L32.164 61.05L32.164 53.47L24.584 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,49.9 28.6,50.8 21.2,54.5 21.2,58.1 19.4,57.2 19.4,53.6   "
                  d="M27.452 51.114L29.296 52.036L21.716 55.826L21.716 59.513L19.872 58.592L19.872 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="24,63.3 16.6,59.6 16.6,52.2 24,55.9   "
                  d="M24.584 64.84L17.004 61.05L17.004 53.47L24.584 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,56.2 39.4,63.6 32,67.3 24.6,63.6 24.6,56.2 32,52.5   "
                  d="M40.359 57.567L40.359 65.147L32.778 68.937L25.198 65.147L25.198 57.567L32.778 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="32,67.3 39.4,63.6 39.4,56.2 32,59.9   "
                  d="M32.778 68.937L40.359 65.147L40.359 57.567L32.778 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,53.9 36.6,54.8 29.2,58.5 29.2,62.1 27.4,61.2 27.4,57.6   "
                  d="M35.647 55.211L37.49 56.133L29.91 59.923L29.91 63.611L28.067 62.689L28.067 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="32,67.3 24.6,63.6 24.6,56.2 32,59.9   "
                  d="M32.778 68.937L25.198 65.147L25.198 57.567L32.778 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,60.2 47.4,67.6 40,71.3 32.6,67.6 32.6,60.2 40,56.5   "
                  d="M48.553 61.665L48.553 69.245L40.973 73.035L33.393 69.245L33.393 61.665L40.973 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="40,71.3 47.4,67.6 47.4,60.2 40,63.9   "
                  d="M40.973 73.035L48.553 69.245L48.553 61.665L40.973 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,57.9 44.6,58.8 37.2,62.5 37.2,66.1 35.4,65.2 35.4,61.6   "
                  d="M43.841 59.309L45.685 60.23L38.105 64.02L38.105 67.708L36.261 66.786L36.261 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="40,71.3 32.6,67.6 32.6,60.2 40,63.9   "
                  d="M40.973 73.035L33.393 69.245L33.393 61.665L40.973 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,47.6 8,48.2 40,64.2 48,60.2 48,59.6 16,43.6   "
                  d="M8.195 48.758L8.195 49.373L40.973 65.762L49.168 61.665L49.168 61.05L16.389 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="40,64.2 8,48.2 8,47.6 40,63.6   "
                  d="M40.973 65.762L8.195 49.373L8.195 48.758L40.973 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="40,64.2 48,60.2 48,59.6 40,63.6   "
                  d="M40.973 65.762L49.168 61.665L49.168 61.05L40.973 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,40.2 23.4,47.6 16,51.3 8.6,47.6 8.6,40.2 16,36.5   "
                  d="M23.969 41.178L23.969 48.758L16.389 52.548L8.809 48.758L8.809 41.178L16.389 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="16,51.3 23.4,47.6 23.4,40.2 16,43.9   "
                  d="M16.389 52.548L23.969 48.758L23.969 41.178L16.389 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,37.9 20.6,38.8 13.2,42.5 13.2,46.1 11.4,45.2 11.4,41.6   "
                  d="M19.257 38.822L21.101 39.744L13.521 43.534L13.521 47.222L11.677 46.3L11.677 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="16,51.3 8.6,47.6 8.6,40.2 16,43.9   "
                  d="M16.389 52.548L8.809 48.758L8.809 41.178L16.389 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,44.2 31.4,51.6 24,55.3 16.6,51.6 16.6,44.2 24,40.5   "
                  d="M32.164 45.275L32.164 52.855L24.584 56.645L17.004 52.855L17.004 45.275L24.584 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="24,55.3 31.4,51.6 31.4,44.2 24,47.9   "
                  d="M24.584 56.645L32.164 52.855L32.164 45.275L24.584 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,41.9 28.6,42.8 21.2,46.5 21.2,50.1 19.4,49.2 19.4,45.6   "
                  d="M27.452 42.919L29.296 43.841L21.716 47.631L21.716 51.319L19.872 50.397L19.872 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="24,55.3 16.6,51.6 16.6,44.2 24,47.9   "
                  d="M24.584 56.645L17.004 52.855L17.004 45.275L24.584 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,48.2 39.4,55.6 32,59.3 24.6,55.6 24.6,48.2 32,44.5   "
                  d="M40.359 49.373L40.359 56.953L32.778 60.743L25.198 56.953L25.198 49.373L32.778 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="32,59.3 39.4,55.6 39.4,48.2 32,51.9   "
                  d="M32.778 60.743L40.359 56.953L40.359 49.373L32.778 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,45.9 36.6,46.8 29.2,50.5 29.2,54.1 27.4,53.2 27.4,49.6   "
                  d="M35.647 47.017L37.49 47.939L29.91 51.729L29.91 55.416L28.067 54.494L28.067 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="32,59.3 24.6,55.6 24.6,48.2 32,51.9   "
                  d="M32.778 60.743L25.198 56.953L25.198 49.373L32.778 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,52.2 47.4,59.6 40,63.3 32.6,59.6 32.6,52.2 40,48.5   "
                  d="M48.553 53.47L48.553 61.05L40.973 64.84L33.393 61.05L33.393 53.47L40.973 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="40,63.3 47.4,59.6 47.4,52.2 40,55.9   "
                  d="M40.973 64.84L48.553 61.05L48.553 53.47L40.973 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,49.9 44.6,50.8 37.2,54.5 37.2,58.1 35.4,57.2 35.4,53.6   "
                  d="M43.841 51.114L45.685 52.036L38.105 55.826L38.105 59.513L36.261 58.592L36.261 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="40,63.3 32.6,59.6 32.6,52.2 40,55.9   "
                  d="M40.973 64.84L33.393 61.05L33.393 53.47L40.973 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,96 40,96.6 41.2,96 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 98.335L40.973 98.95L42.202 98.335L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.6 38.8,96 38.8,32 40,32.6   "
                  d="M40.973 98.95L39.744 98.335L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.6 41.2,96 41.2,32 40,32.6   "
                  d="M40.973 98.95L42.202 98.335L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="86.8,40 86.8,104 88,104.6 89.2,104 89.2,40 88,39.4   "
                  d="M88.912 40.973L88.912 106.53L90.141 107.145L91.37 106.53L91.37 40.973L90.141 40.359Z"
                />
                <path
                  opacity={0.29}
                  points="88,104.6 86.8,104 86.8,40 88,40.6   "
                  d="M90.141 107.145L88.912 106.53L88.912 40.973L90.141 41.588Z"
                />
                <path
                  opacity={0.11}
                  points="88,104.6 89.2,104 89.2,40 88,40.6   "
                  d="M90.141 107.145L91.37 106.53L91.37 40.973L90.141 41.588Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,91.6 48,92.2 80,108.2 88,104.2 88,103.6 56,87.6   "
                  d="M49.168 93.828L49.168 94.443L81.946 110.832L90.141 106.735L90.141 106.12L57.362 89.731Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.2 48,92.2 48,91.6 80,107.6   "
                  d="M81.946 110.832L49.168 94.443L49.168 93.828L81.946 110.218Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.2 88,104.2 88,103.6 80,107.6   "
                  d="M81.946 110.832L90.141 106.735L90.141 106.12L81.946 110.218Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,96.2 87.4,103.6 80,107.3 72.6,103.6 72.6,96.2 80,92.5   "
                  d="M89.526 98.54L89.526 106.12L81.946 109.91L74.366 106.12L74.366 98.54L81.946 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="80,107.3 87.4,103.6 87.4,96.2 80,99.9   "
                  d="M81.946 109.91L89.526 106.12L89.526 98.54L81.946 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,93.9 84.6,94.8 77.2,98.5 77.2,102.1 75.4,101.2 75.4,97.6   "
                  d="M84.814 96.184L86.658 97.106L79.078 100.896L79.078 104.584L77.234 103.662L77.234 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="80,107.3 72.6,103.6 72.6,96.2 80,99.9   "
                  d="M81.946 109.91L74.366 106.12L74.366 98.54L81.946 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,83.6 48,84.2 80,100.2 88,96.2 88,95.6 56,79.6   "
                  d="M49.168 85.634L49.168 86.248L81.946 102.638L90.141 98.54L90.141 97.926L57.362 81.536Z"
                />
                <path
                  opacity={0.29}
                  points="80,100.2 48,84.2 48,83.6 80,99.6   "
                  d="M81.946 102.638L49.168 86.248L49.168 85.634L81.946 102.023Z"
                />
                <path
                  opacity={0.11}
                  points="80,100.2 88,96.2 88,95.6 80,99.6   "
                  d="M81.946 102.638L90.141 98.54L90.141 97.926L81.946 102.023Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,88.2 87.4,95.6 80,99.3 72.6,95.6 72.6,88.2 80,84.5   "
                  d="M89.526 90.346L89.526 97.926L81.946 101.716L74.366 97.926L74.366 90.346L81.946 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="80,99.3 87.4,95.6 87.4,88.2 80,91.9   "
                  d="M81.946 101.716L89.526 97.926L89.526 90.346L81.946 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,85.9 84.6,86.8 77.2,90.5 77.2,94.1 75.4,93.2 75.4,89.6   "
                  d="M84.814 87.99L86.658 88.912L79.078 92.702L79.078 96.389L77.234 95.467L77.234 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="80,99.3 72.6,95.6 72.6,88.2 80,91.9   "
                  d="M81.946 101.716L74.366 97.926L74.366 90.346L81.946 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,98.9 88,89.6 88,89 87.4,88.7 81.1,97.4   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L89.526 90.858L83.073 99.77Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,98.9 88,89.6 88,89 81.1,98.3   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L83.073 100.691Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,106.9 88,97.6 88,97 87.4,96.7 81.1,105.4   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L89.526 99.052L83.073 107.964Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,106.9 88,97.6 88,97 81.1,106.3   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L83.073 108.886Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,75.6 48,76.2 80,92.2 88,88.2 88,87.6 56,71.6   "
                  d="M49.168 77.439L49.168 78.054L81.946 94.443L90.141 90.346L90.141 89.731L57.362 73.342Z"
                />
                <path
                  opacity={0.29}
                  points="80,92.2 48,76.2 48,75.6 80,91.6   "
                  d="M81.946 94.443L49.168 78.054L49.168 77.439L81.946 93.828Z"
                />
                <path
                  opacity={0.11}
                  points="80,92.2 88,88.2 88,87.6 80,91.6   "
                  d="M81.946 94.443L90.141 90.346L90.141 89.731L81.946 93.828Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,80.2 87.4,87.6 80,91.3 72.6,87.6 72.6,80.2 80,76.5   "
                  d="M89.526 82.151L89.526 89.731L81.946 93.521L74.366 89.731L74.366 82.151L81.946 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="80,91.3 87.4,87.6 87.4,80.2 80,83.9   "
                  d="M81.946 93.521L89.526 89.731L89.526 82.151L81.946 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,77.9 84.6,78.8 77.2,82.5 77.2,86.1 75.4,85.2 75.4,81.6   "
                  d="M84.814 79.795L86.658 80.717L79.078 84.507L79.078 88.195L77.234 87.273L77.234 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="80,91.3 72.6,87.6 72.6,80.2 80,83.9   "
                  d="M81.946 93.521L74.366 89.731L74.366 82.151L81.946 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,91 88,81.7 88,81.1 87.4,80.8 81.1,89.5   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L89.526 82.766L83.073 91.677Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,91 88,81.7 88,81.1 81.1,90.4   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L83.073 92.599Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,67.6 48,68.2 80,84.2 88,80.2 88,79.6 56,63.6   "
                  d="M49.168 69.245L49.168 69.859L81.946 86.248L90.141 82.151L90.141 81.536L57.362 65.147Z"
                />
                <path
                  opacity={0.29}
                  points="80,84.2 48,68.2 48,67.6 80,83.6   "
                  d="M81.946 86.248L49.168 69.859L49.168 69.245L81.946 85.634Z"
                />
                <path
                  opacity={0.11}
                  points="80,84.2 88,80.2 88,79.6 80,83.6   "
                  d="M81.946 86.248L90.141 82.151L90.141 81.536L81.946 85.634Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,72.2 87.4,79.6 80,83.3 72.6,79.6 72.6,72.2 80,68.5   "
                  d="M89.526 73.956L89.526 81.536L81.946 85.327L74.366 81.536L74.366 73.956L81.946 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="80,83.3 87.4,79.6 87.4,72.2 80,75.9   "
                  d="M81.946 85.327L89.526 81.536L89.526 73.956L81.946 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,69.9 84.6,70.8 77.2,74.5 77.2,78.1 75.4,77.2 75.4,73.6   "
                  d="M84.814 71.601L86.658 72.522L79.078 76.312L79.078 80L77.234 79.078L77.234 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="80,83.3 72.6,79.6 72.6,72.2 80,75.9   "
                  d="M81.946 85.327L74.366 81.536L74.366 73.956L81.946 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,59.6 48,60.2 80,76.2 88,72.2 88,71.6 56,55.6   "
                  d="M49.168 61.05L49.168 61.665L81.946 78.054L90.141 73.956L90.141 73.342L57.362 56.953Z"
                />
                <path
                  opacity={0.29}
                  points="80,76.2 48,60.2 48,59.6 80,75.6   "
                  d="M81.946 78.054L49.168 61.665L49.168 61.05L81.946 77.439Z"
                />
                <path
                  opacity={0.11}
                  points="80,76.2 88,72.2 88,71.6 80,75.6   "
                  d="M81.946 78.054L90.141 73.956L90.141 73.342L81.946 77.439Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,64.2 87.4,71.6 80,75.3 72.6,71.6 72.6,64.2 80,60.5   "
                  d="M89.526 65.762L89.526 73.342L81.946 77.132L74.366 73.342L74.366 65.762L81.946 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="80,75.3 87.4,71.6 87.4,64.2 80,67.9   "
                  d="M81.946 77.132L89.526 73.342L89.526 65.762L81.946 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,61.9 84.6,62.8 77.2,66.5 77.2,70.1 75.4,69.2 75.4,65.6   "
                  d="M84.814 63.406L86.658 64.328L79.078 68.118L79.078 71.805L77.234 70.883L77.234 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="80,75.3 72.6,71.6 72.6,64.2 80,67.9   "
                  d="M81.946 77.132L74.366 73.342L74.366 65.762L81.946 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,74.9 88,65.6 88,65 87.4,64.7 81.1,73.4   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L89.526 66.274L83.073 75.186Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,74.9 88,65.6 88,65 81.1,74.3   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L83.073 76.108Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,82.9 88,73.6 88,73 87.4,72.7 81.1,81.4   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L89.526 74.469L83.073 83.38Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,82.9 88,73.6 88,73 81.1,82.3   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L83.073 84.302Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,51.6 48,52.2 80,68.2 88,64.2 88,63.6 56,47.6   "
                  d="M49.168 52.855L49.168 53.47L81.946 69.859L90.141 65.762L90.141 65.147L57.362 48.758Z"
                />
                <path
                  opacity={0.29}
                  points="80,68.2 48,52.2 48,51.6 80,67.6   "
                  d="M81.946 69.859L49.168 53.47L49.168 52.855L81.946 69.245Z"
                />
                <path
                  opacity={0.11}
                  points="80,68.2 88,64.2 88,63.6 80,67.6   "
                  d="M81.946 69.859L90.141 65.762L90.141 65.147L81.946 69.245Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,56.2 87.4,63.6 80,67.3 72.6,63.6 72.6,56.2 80,52.5   "
                  d="M89.526 57.567L89.526 65.147L81.946 68.937L74.366 65.147L74.366 57.567L81.946 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="80,67.3 87.4,63.6 87.4,56.2 80,59.9   "
                  d="M81.946 68.937L89.526 65.147L89.526 57.567L81.946 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,53.9 84.6,54.8 77.2,58.5 77.2,62.1 75.4,61.2 75.4,57.6   "
                  d="M84.814 55.211L86.658 56.133L79.078 59.923L79.078 63.611L77.234 62.689L77.234 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="80,67.3 72.6,63.6 72.6,56.2 80,59.9   "
                  d="M81.946 68.937L74.366 65.147L74.366 57.567L81.946 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,67 88,57.7 88,57.1 87.4,56.8 81.1,65.5   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L89.526 58.182L83.073 67.093Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,67 88,57.7 88,57.1 81.1,66.4   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L83.073 68.015Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,43.6 48,44.2 80,60.2 88,56.2 88,55.6 56,39.6   "
                  d="M49.168 44.661L49.168 45.275L81.946 61.665L90.141 57.567L90.141 56.953L57.362 40.563Z"
                />
                <path
                  opacity={0.29}
                  points="80,60.2 48,44.2 48,43.6 80,59.6   "
                  d="M81.946 61.665L49.168 45.275L49.168 44.661L81.946 61.05Z"
                />
                <path
                  opacity={0.11}
                  points="80,60.2 88,56.2 88,55.6 80,59.6   "
                  d="M81.946 61.665L90.141 57.567L90.141 56.953L81.946 61.05Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,48.2 87.4,55.6 80,59.3 72.6,55.6 72.6,48.2 80,44.5   "
                  d="M89.526 49.373L89.526 56.953L81.946 60.743L74.366 56.953L74.366 49.373L81.946 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="80,59.3 87.4,55.6 87.4,48.2 80,51.9   "
                  d="M81.946 60.743L89.526 56.953L89.526 49.373L81.946 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,45.9 84.6,46.8 77.2,50.5 77.2,54.1 75.4,53.2 75.4,49.6   "
                  d="M84.814 47.017L86.658 47.939L79.078 51.729L79.078 55.416L77.234 54.494L77.234 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="80,59.3 72.6,55.6 72.6,48.2 80,51.9   "
                  d="M81.946 60.743L74.366 56.953L74.366 49.373L81.946 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,35.6 48,36.2 80,52.2 88,48.2 88,47.6 56,31.6   "
                  d="M49.168 36.466L49.168 37.081L81.946 53.47L90.141 49.373L90.141 48.758L57.362 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="80,52.2 48,36.2 48,35.6 80,51.6   "
                  d="M81.946 53.47L49.168 37.081L49.168 36.466L81.946 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="80,52.2 88,48.2 88,47.6 80,51.6   "
                  d="M81.946 53.47L90.141 49.373L90.141 48.758L81.946 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,28.2 63.4,35.6 56,39.3 48.6,35.6 48.6,28.2 56,24.5   "
                  d="M64.942 28.886L64.942 36.466L57.362 40.256L49.782 36.466L49.782 28.886L57.362 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="56,39.3 63.4,35.6 63.4,28.2 56,31.9   "
                  d="M57.362 40.256L64.942 36.466L64.942 28.886L57.362 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,25.9 60.6,26.8 53.2,30.5 53.2,34.1 51.4,33.2 51.4,29.6   "
                  d="M60.23 26.53L62.074 27.452L54.494 31.242L54.494 34.93L52.65 34.008L52.65 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="56,39.3 48.6,35.6 48.6,28.2 56,31.9   "
                  d="M57.362 40.256L49.782 36.466L49.782 28.886L57.362 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,32.2 71.4,39.6 64,43.3 56.6,39.6 56.6,32.2 64,28.5   "
                  d="M73.137 32.983L73.137 40.563L65.557 44.353L57.977 40.563L57.977 32.983L65.557 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="64,43.3 71.4,39.6 71.4,32.2 64,35.9   "
                  d="M65.557 44.353L73.137 40.563L73.137 32.983L65.557 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,29.9 68.6,30.8 61.2,34.5 61.2,38.1 59.4,37.2 59.4,33.6   "
                  d="M68.425 30.627L70.269 31.549L62.689 35.339L62.689 39.027L60.845 38.105L60.845 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="64,43.3 56.6,39.6 56.6,32.2 64,35.9   "
                  d="M65.557 44.353L57.977 40.563L57.977 32.983L65.557 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,36.2 79.4,43.6 72,47.3 64.6,43.6 64.6,36.2 72,32.5   "
                  d="M81.332 37.081L81.332 44.661L73.752 48.451L66.172 44.661L66.172 37.081L73.752 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="72,47.3 79.4,43.6 79.4,36.2 72,39.9   "
                  d="M73.752 48.451L81.332 44.661L81.332 37.081L73.752 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,33.9 76.6,34.8 69.2,38.5 69.2,42.1 67.4,41.2 67.4,37.6   "
                  d="M76.62 34.725L78.464 35.647L70.883 39.437L70.883 43.124L69.04 42.202L69.04 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="72,47.3 64.6,43.6 64.6,36.2 72,39.9   "
                  d="M73.752 48.451L66.172 44.661L66.172 37.081L73.752 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,40.2 87.4,47.6 80,51.3 72.6,47.6 72.6,40.2 80,36.5   "
                  d="M89.526 41.178L89.526 48.758L81.946 52.548L74.366 48.758L74.366 41.178L81.946 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="80,51.3 87.4,47.6 87.4,40.2 80,43.9   "
                  d="M81.946 52.548L89.526 48.758L89.526 41.178L81.946 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,37.9 84.6,38.8 77.2,42.5 77.2,46.1 75.4,45.2 75.4,41.6   "
                  d="M84.814 38.822L86.658 39.744L79.078 43.534L79.078 47.222L77.234 46.3L77.234 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="80,51.3 72.6,47.6 72.6,40.2 80,43.9   "
                  d="M81.946 52.548L74.366 48.758L74.366 41.178L81.946 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,50.9 88,41.6 88,41 87.4,40.7 81.1,49.4   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L89.526 41.69L83.073 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,50.9 88,41.6 88,41 81.1,50.3   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L83.073 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,58.9 88,49.6 88,49 87.4,48.7 81.1,57.4   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L89.526 49.885L83.073 58.796Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,58.9 88,49.6 88,49 81.1,58.3   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L83.073 59.718Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,95.6 40,96.2 72,112.2 80,108.2 80,107.6 48,91.6   "
                  d="M40.973 97.926L40.973 98.54L73.752 114.93L81.946 110.832L81.946 110.218L49.168 93.828Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.2 40,96.2 40,95.6 72,111.6   "
                  d="M73.752 114.93L40.973 98.54L40.973 97.926L73.752 114.315Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.2 80,108.2 80,107.6 72,111.6   "
                  d="M73.752 114.93L81.946 110.832L81.946 110.218L73.752 114.315Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,88.2 55.4,95.6 48,99.3 40.6,95.6 40.6,88.2 48,84.5   "
                  d="M56.748 90.346L56.748 97.926L49.168 101.716L41.588 97.926L41.588 90.346L49.168 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="48,99.3 55.4,95.6 55.4,88.2 48,91.9   "
                  d="M49.168 101.716L56.748 97.926L56.748 90.346L49.168 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,85.9 52.6,86.8 45.2,90.5 45.2,94.1 43.4,93.2 43.4,89.6   "
                  d="M52.036 87.99L53.88 88.912L46.3 92.702L46.3 96.389L44.456 95.467L44.456 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="48,99.3 40.6,95.6 40.6,88.2 48,91.9   "
                  d="M49.168 101.716L41.588 97.926L41.588 90.346L49.168 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,92.2 63.4,99.6 56,103.3 48.6,99.6 48.6,92.2 56,88.5   "
                  d="M64.942 94.443L64.942 102.023L57.362 105.813L49.782 102.023L49.782 94.443L57.362 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="56,103.3 63.4,99.6 63.4,92.2 56,95.9   "
                  d="M57.362 105.813L64.942 102.023L64.942 94.443L57.362 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,89.9 60.6,90.8 53.2,94.5 53.2,98.1 51.4,97.2 51.4,93.6   "
                  d="M60.23 92.087L62.074 93.009L54.494 96.799L54.494 100.487L52.65 99.565L52.65 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="56,103.3 48.6,99.6 48.6,92.2 56,95.9   "
                  d="M57.362 105.813L49.782 102.023L49.782 94.443L57.362 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,96.2 71.4,103.6 64,107.3 56.6,103.6 56.6,96.2 64,92.5   "
                  d="M73.137 98.54L73.137 106.12L65.557 109.91L57.977 106.12L57.977 98.54L65.557 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="64,107.3 71.4,103.6 71.4,96.2 64,99.9   "
                  d="M65.557 109.91L73.137 106.12L73.137 98.54L65.557 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,93.9 68.6,94.8 61.2,98.5 61.2,102.1 59.4,101.2 59.4,97.6   "
                  d="M68.425 96.184L70.269 97.106L62.689 100.896L62.689 104.584L60.845 103.662L60.845 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="64,107.3 56.6,103.6 56.6,96.2 64,99.9   "
                  d="M65.557 109.91L57.977 106.12L57.977 98.54L65.557 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,100.2 79.4,107.6 72,111.3 64.6,107.6 64.6,100.2 72,96.5   "
                  d="M81.332 102.638L81.332 110.218L73.752 114.008L66.172 110.218L66.172 102.638L73.752 98.848Z"
                />
                <path
                  opacity={0.11}
                  points="72,111.3 79.4,107.6 79.4,100.2 72,103.9   "
                  d="M73.752 114.008L81.332 110.218L81.332 102.638L73.752 106.428Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,97.9 76.6,98.8 69.2,102.5 69.2,106.1 67.4,105.2 67.4,101.6   "
                  d="M76.62 100.282L78.464 101.204L70.883 104.994L70.883 108.681L69.04 107.759L69.04 104.072Z"
                />
                <path
                  opacity={0.29}
                  points="72,111.3 64.6,107.6 64.6,100.2 72,103.9   "
                  d="M73.752 114.008L66.172 110.218L66.172 102.638L73.752 106.428Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,87.6 40,88.2 72,104.2 80,100.2 80,99.6 48,83.6   "
                  d="M40.973 89.731L40.973 90.346L73.752 106.735L81.946 102.638L81.946 102.023L49.168 85.634Z"
                />
                <path
                  opacity={0.29}
                  points="72,104.2 40,88.2 40,87.6 72,103.6   "
                  d="M73.752 106.735L40.973 90.346L40.973 89.731L73.752 106.12Z"
                />
                <path
                  opacity={0.11}
                  points="72,104.2 80,100.2 80,99.6 72,103.6   "
                  d="M73.752 106.735L81.946 102.638L81.946 102.023L73.752 106.12Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,80.2 55.4,87.6 48,91.3 40.6,87.6 40.6,80.2 48,76.5   "
                  d="M56.748 82.151L56.748 89.731L49.168 93.521L41.588 89.731L41.588 82.151L49.168 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="48,91.3 55.4,87.6 55.4,80.2 48,83.9   "
                  d="M49.168 93.521L56.748 89.731L56.748 82.151L49.168 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,77.9 52.6,78.8 45.2,82.5 45.2,86.1 43.4,85.2 43.4,81.6   "
                  d="M52.036 79.795L53.88 80.717L46.3 84.507L46.3 88.195L44.456 87.273L44.456 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="48,91.3 40.6,87.6 40.6,80.2 48,83.9   "
                  d="M49.168 93.521L41.588 89.731L41.588 82.151L49.168 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,84.2 63.4,91.6 56,95.3 48.6,91.6 48.6,84.2 56,80.5   "
                  d="M64.942 86.248L64.942 93.828L57.362 97.618L49.782 93.828L49.782 86.248L57.362 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="56,95.3 63.4,91.6 63.4,84.2 56,87.9   "
                  d="M57.362 97.618L64.942 93.828L64.942 86.248L57.362 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,81.9 60.6,82.8 53.2,86.5 53.2,90.1 51.4,89.2 51.4,85.6   "
                  d="M60.23 83.892L62.074 84.814L54.494 88.604L54.494 92.292L52.65 91.37L52.65 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="56,95.3 48.6,91.6 48.6,84.2 56,87.9   "
                  d="M57.362 97.618L49.782 93.828L49.782 86.248L57.362 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,88.2 71.4,95.6 64,99.3 56.6,95.6 56.6,88.2 64,84.5   "
                  d="M73.137 90.346L73.137 97.926L65.557 101.716L57.977 97.926L57.977 90.346L65.557 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="64,99.3 71.4,95.6 71.4,88.2 64,91.9   "
                  d="M65.557 101.716L73.137 97.926L73.137 90.346L65.557 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,85.9 68.6,86.8 61.2,90.5 61.2,94.1 59.4,93.2 59.4,89.6   "
                  d="M68.425 87.99L70.269 88.912L62.689 92.702L62.689 96.389L60.845 95.467L60.845 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="64,99.3 56.6,95.6 56.6,88.2 64,91.9   "
                  d="M65.557 101.716L57.977 97.926L57.977 90.346L65.557 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,92.2 79.4,99.6 72,103.3 64.6,99.6 64.6,92.2 72,88.5   "
                  d="M81.332 94.443L81.332 102.023L73.752 105.813L66.172 102.023L66.172 94.443L73.752 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="72,103.3 79.4,99.6 79.4,92.2 72,95.9   "
                  d="M73.752 105.813L81.332 102.023L81.332 94.443L73.752 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,89.9 76.6,90.8 69.2,94.5 69.2,98.1 67.4,97.2 67.4,93.6   "
                  d="M76.62 92.087L78.464 93.009L70.883 96.799L70.883 100.487L69.04 99.565L69.04 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="72,103.3 64.6,99.6 64.6,92.2 72,95.9   "
                  d="M73.752 105.813L66.172 102.023L66.172 94.443L73.752 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,102.9 80,93.6 80,93 79.4,92.7 73.1,101.4   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L81.332 94.955L74.878 103.867Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,102.9 80,93.6 80,93 73.1,102.3   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L74.878 104.789Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,79.6 40,80.2 72,96.2 80,92.2 80,91.6 48,75.6   "
                  d="M40.973 81.536L40.973 82.151L73.752 98.54L81.946 94.443L81.946 93.828L49.168 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="72,96.2 40,80.2 40,79.6 72,95.6   "
                  d="M73.752 98.54L40.973 82.151L40.973 81.536L73.752 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="72,96.2 80,92.2 80,91.6 72,95.6   "
                  d="M73.752 98.54L81.946 94.443L81.946 93.828L73.752 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,110.9 80,101.6 80,101 79.4,100.7 73.1,109.4   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L81.332 103.15L74.878 112.061Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,110.9 80,101.6 80,101 73.1,110.3   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L74.878 112.983Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,72.2 55.4,79.6 48,83.3 40.6,79.6 40.6,72.2 48,68.5   "
                  d="M56.748 73.956L56.748 81.536L49.168 85.327L41.588 81.536L41.588 73.956L49.168 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="48,83.3 55.4,79.6 55.4,72.2 48,75.9   "
                  d="M49.168 85.327L56.748 81.536L56.748 73.956L49.168 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,69.9 52.6,70.8 45.2,74.5 45.2,78.1 43.4,77.2 43.4,73.6   "
                  d="M52.036 71.601L53.88 72.522L46.3 76.312L46.3 80L44.456 79.078L44.456 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="48,83.3 40.6,79.6 40.6,72.2 48,75.9   "
                  d="M49.168 85.327L41.588 81.536L41.588 73.956L49.168 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,76.2 63.4,83.6 56,87.3 48.6,83.6 48.6,76.2 56,72.5   "
                  d="M64.942 78.054L64.942 85.634L57.362 89.424L49.782 85.634L49.782 78.054L57.362 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="56,87.3 63.4,83.6 63.4,76.2 56,79.9   "
                  d="M57.362 89.424L64.942 85.634L64.942 78.054L57.362 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,73.9 60.6,74.8 53.2,78.5 53.2,82.1 51.4,81.2 51.4,77.6   "
                  d="M60.23 75.698L62.074 76.62L54.494 80.41L54.494 84.097L52.65 83.175L52.65 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="56,87.3 48.6,83.6 48.6,76.2 56,79.9   "
                  d="M57.362 89.424L49.782 85.634L49.782 78.054L57.362 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,80.2 71.4,87.6 64,91.3 56.6,87.6 56.6,80.2 64,76.5   "
                  d="M73.137 82.151L73.137 89.731L65.557 93.521L57.977 89.731L57.977 82.151L65.557 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="64,91.3 71.4,87.6 71.4,80.2 64,83.9   "
                  d="M65.557 93.521L73.137 89.731L73.137 82.151L65.557 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,77.9 68.6,78.8 61.2,82.5 61.2,86.1 59.4,85.2 59.4,81.6   "
                  d="M68.425 79.795L70.269 80.717L62.689 84.507L62.689 88.195L60.845 87.273L60.845 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="64,91.3 56.6,87.6 56.6,80.2 64,83.9   "
                  d="M65.557 93.521L57.977 89.731L57.977 82.151L65.557 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,84.2 79.4,91.6 72,95.3 64.6,91.6 64.6,84.2 72,80.5   "
                  d="M81.332 86.248L81.332 93.828L73.752 97.618L66.172 93.828L66.172 86.248L73.752 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="72,95.3 79.4,91.6 79.4,84.2 72,87.9   "
                  d="M73.752 97.618L81.332 93.828L81.332 86.248L73.752 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,81.9 76.6,82.8 69.2,86.5 69.2,90.1 67.4,89.2 67.4,85.6   "
                  d="M76.62 83.892L78.464 84.814L70.883 88.604L70.883 92.292L69.04 91.37L69.04 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="72,95.3 64.6,91.6 64.6,84.2 72,87.9   "
                  d="M73.752 97.618L66.172 93.828L66.172 86.248L73.752 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,95 80,85.7 80,85.1 79.4,84.8 73.1,93.5   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L81.332 86.863L74.878 95.775Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,95 80,85.7 80,85.1 73.1,94.4   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L74.878 96.697Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,71.6 40,72.2 72,88.2 80,84.2 80,83.6 48,67.6   "
                  d="M40.973 73.342L40.973 73.956L73.752 90.346L81.946 86.248L81.946 85.634L49.168 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="72,88.2 40,72.2 40,71.6 72,87.6   "
                  d="M73.752 90.346L40.973 73.956L40.973 73.342L73.752 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="72,88.2 80,84.2 80,83.6 72,87.6   "
                  d="M73.752 90.346L81.946 86.248L81.946 85.634L73.752 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,64.2 55.4,71.6 48,75.3 40.6,71.6 40.6,64.2 48,60.5   "
                  d="M56.748 65.762L56.748 73.342L49.168 77.132L41.588 73.342L41.588 65.762L49.168 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="48,75.3 55.4,71.6 55.4,64.2 48,67.9   "
                  d="M49.168 77.132L56.748 73.342L56.748 65.762L49.168 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,61.9 52.6,62.8 45.2,66.5 45.2,70.1 43.4,69.2 43.4,65.6   "
                  d="M52.036 63.406L53.88 64.328L46.3 68.118L46.3 71.805L44.456 70.883L44.456 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="48,75.3 40.6,71.6 40.6,64.2 48,67.9   "
                  d="M49.168 77.132L41.588 73.342L41.588 65.762L49.168 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,68.2 63.4,75.6 56,79.3 48.6,75.6 48.6,68.2 56,64.5   "
                  d="M64.942 69.859L64.942 77.439L57.362 81.229L49.782 77.439L49.782 69.859L57.362 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="56,79.3 63.4,75.6 63.4,68.2 56,71.9   "
                  d="M57.362 81.229L64.942 77.439L64.942 69.859L57.362 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,65.9 60.6,66.8 53.2,70.5 53.2,74.1 51.4,73.2 51.4,69.6   "
                  d="M60.23 67.503L62.074 68.425L54.494 72.215L54.494 75.903L52.65 74.981L52.65 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="56,79.3 48.6,75.6 48.6,68.2 56,71.9   "
                  d="M57.362 81.229L49.782 77.439L49.782 69.859L57.362 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,72.2 71.4,79.6 64,83.3 56.6,79.6 56.6,72.2 64,68.5   "
                  d="M73.137 73.956L73.137 81.536L65.557 85.327L57.977 81.536L57.977 73.956L65.557 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="64,83.3 71.4,79.6 71.4,72.2 64,75.9   "
                  d="M65.557 85.327L73.137 81.536L73.137 73.956L65.557 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,69.9 68.6,70.8 61.2,74.5 61.2,78.1 59.4,77.2 59.4,73.6   "
                  d="M68.425 71.601L70.269 72.522L62.689 76.312L62.689 80L60.845 79.078L60.845 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="64,83.3 56.6,79.6 56.6,72.2 64,75.9   "
                  d="M65.557 85.327L57.977 81.536L57.977 73.956L65.557 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,76.2 79.4,83.6 72,87.3 64.6,83.6 64.6,76.2 72,72.5   "
                  d="M81.332 78.054L81.332 85.634L73.752 89.424L66.172 85.634L66.172 78.054L73.752 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="72,87.3 79.4,83.6 79.4,76.2 72,79.9   "
                  d="M73.752 89.424L81.332 85.634L81.332 78.054L73.752 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,73.9 76.6,74.8 69.2,78.5 69.2,82.1 67.4,81.2 67.4,77.6   "
                  d="M76.62 75.698L78.464 76.62L70.883 80.41L70.883 84.097L69.04 83.175L69.04 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="72,87.3 64.6,83.6 64.6,76.2 72,79.9   "
                  d="M73.752 89.424L66.172 85.634L66.172 78.054L73.752 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,63.6 40,64.2 72,80.2 80,76.2 80,75.6 48,59.6   "
                  d="M40.973 65.147L40.973 65.762L73.752 82.151L81.946 78.054L81.946 77.439L49.168 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="72,80.2 40,64.2 40,63.6 72,79.6   "
                  d="M73.752 82.151L40.973 65.762L40.973 65.147L73.752 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="72,80.2 80,76.2 80,75.6 72,79.6   "
                  d="M73.752 82.151L81.946 78.054L81.946 77.439L73.752 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,56.2 55.4,63.6 48,67.3 40.6,63.6 40.6,56.2 48,52.5   "
                  d="M56.748 57.567L56.748 65.147L49.168 68.937L41.588 65.147L41.588 57.567L49.168 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="48,67.3 55.4,63.6 55.4,56.2 48,59.9   "
                  d="M49.168 68.937L56.748 65.147L56.748 57.567L49.168 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,53.9 52.6,54.8 45.2,58.5 45.2,62.1 43.4,61.2 43.4,57.6   "
                  d="M52.036 55.211L53.88 56.133L46.3 59.923L46.3 63.611L44.456 62.689L44.456 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="48,67.3 40.6,63.6 40.6,56.2 48,59.9   "
                  d="M49.168 68.937L41.588 65.147L41.588 57.567L49.168 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,60.2 63.4,67.6 56,71.3 48.6,67.6 48.6,60.2 56,56.5   "
                  d="M64.942 61.665L64.942 69.245L57.362 73.035L49.782 69.245L49.782 61.665L57.362 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="56,71.3 63.4,67.6 63.4,60.2 56,63.9   "
                  d="M57.362 73.035L64.942 69.245L64.942 61.665L57.362 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,57.9 60.6,58.8 53.2,62.5 53.2,66.1 51.4,65.2 51.4,61.6   "
                  d="M60.23 59.309L62.074 60.23L54.494 64.02L54.494 67.708L52.65 66.786L52.65 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="56,71.3 48.6,67.6 48.6,60.2 56,63.9   "
                  d="M57.362 73.035L49.782 69.245L49.782 61.665L57.362 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,64.2 71.4,71.6 64,75.3 56.6,71.6 56.6,64.2 64,60.5   "
                  d="M73.137 65.762L73.137 73.342L65.557 77.132L57.977 73.342L57.977 65.762L65.557 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="64,75.3 71.4,71.6 71.4,64.2 64,67.9   "
                  d="M65.557 77.132L73.137 73.342L73.137 65.762L65.557 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,61.9 68.6,62.8 61.2,66.5 61.2,70.1 59.4,69.2 59.4,65.6   "
                  d="M68.425 63.406L70.269 64.328L62.689 68.118L62.689 71.805L60.845 70.883L60.845 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="64,75.3 56.6,71.6 56.6,64.2 64,67.9   "
                  d="M65.557 77.132L57.977 73.342L57.977 65.762L65.557 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,68.2 79.4,75.6 72,79.3 64.6,75.6 64.6,68.2 72,64.5   "
                  d="M81.332 69.859L81.332 77.439L73.752 81.229L66.172 77.439L66.172 69.859L73.752 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="72,79.3 79.4,75.6 79.4,68.2 72,71.9   "
                  d="M73.752 81.229L81.332 77.439L81.332 69.859L73.752 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,65.9 76.6,66.8 69.2,70.5 69.2,74.1 67.4,73.2 67.4,69.6   "
                  d="M76.62 67.503L78.464 68.425L70.883 72.215L70.883 75.903L69.04 74.981L69.04 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="72,79.3 64.6,75.6 64.6,68.2 72,71.9   "
                  d="M73.752 81.229L66.172 77.439L66.172 69.859L73.752 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,78.9 80,69.6 80,69 79.4,68.7 73.1,77.4   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L81.332 70.371L74.878 79.283Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,78.9 80,69.6 80,69 73.1,78.3   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L74.878 80.205Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,86.9 80,77.6 80,77 79.4,76.7 73.1,85.4   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L81.332 78.566L74.878 87.478Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,86.9 80,77.6 80,77 73.1,86.3   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L74.878 88.399Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,55.6 40,56.2 72,72.2 80,68.2 80,67.6 48,51.6   "
                  d="M40.973 56.953L40.973 57.567L73.752 73.956L81.946 69.859L81.946 69.245L49.168 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="72,72.2 40,56.2 40,55.6 72,71.6   "
                  d="M73.752 73.956L40.973 57.567L40.973 56.953L73.752 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="72,72.2 80,68.2 80,67.6 72,71.6   "
                  d="M73.752 73.956L81.946 69.859L81.946 69.245L73.752 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,48.2 55.4,55.6 48,59.3 40.6,55.6 40.6,48.2 48,44.5   "
                  d="M56.748 49.373L56.748 56.953L49.168 60.743L41.588 56.953L41.588 49.373L49.168 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="48,59.3 55.4,55.6 55.4,48.2 48,51.9   "
                  d="M49.168 60.743L56.748 56.953L56.748 49.373L49.168 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,45.9 52.6,46.8 45.2,50.5 45.2,54.1 43.4,53.2 43.4,49.6   "
                  d="M52.036 47.017L53.88 47.939L46.3 51.729L46.3 55.416L44.456 54.494L44.456 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="48,59.3 40.6,55.6 40.6,48.2 48,51.9   "
                  d="M49.168 60.743L41.588 56.953L41.588 49.373L49.168 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,52.2 63.4,59.6 56,63.3 48.6,59.6 48.6,52.2 56,48.5   "
                  d="M64.942 53.47L64.942 61.05L57.362 64.84L49.782 61.05L49.782 53.47L57.362 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="56,63.3 63.4,59.6 63.4,52.2 56,55.9   "
                  d="M57.362 64.84L64.942 61.05L64.942 53.47L57.362 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,49.9 60.6,50.8 53.2,54.5 53.2,58.1 51.4,57.2 51.4,53.6   "
                  d="M60.23 51.114L62.074 52.036L54.494 55.826L54.494 59.513L52.65 58.592L52.65 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="56,63.3 48.6,59.6 48.6,52.2 56,55.9   "
                  d="M57.362 64.84L49.782 61.05L49.782 53.47L57.362 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,56.2 71.4,63.6 64,67.3 56.6,63.6 56.6,56.2 64,52.5   "
                  d="M73.137 57.567L73.137 65.147L65.557 68.937L57.977 65.147L57.977 57.567L65.557 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="64,67.3 71.4,63.6 71.4,56.2 64,59.9   "
                  d="M65.557 68.937L73.137 65.147L73.137 57.567L65.557 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,53.9 68.6,54.8 61.2,58.5 61.2,62.1 59.4,61.2 59.4,57.6   "
                  d="M68.425 55.211L70.269 56.133L62.689 59.923L62.689 63.611L60.845 62.689L60.845 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="64,67.3 56.6,63.6 56.6,56.2 64,59.9   "
                  d="M65.557 68.937L57.977 65.147L57.977 57.567L65.557 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,60.2 79.4,67.6 72,71.3 64.6,67.6 64.6,60.2 72,56.5   "
                  d="M81.332 61.665L81.332 69.245L73.752 73.035L66.172 69.245L66.172 61.665L73.752 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="72,71.3 79.4,67.6 79.4,60.2 72,63.9   "
                  d="M73.752 73.035L81.332 69.245L81.332 61.665L73.752 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,57.9 76.6,58.8 69.2,62.5 69.2,66.1 67.4,65.2 67.4,61.6   "
                  d="M76.62 59.309L78.464 60.23L70.883 64.02L70.883 67.708L69.04 66.786L69.04 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="72,71.3 64.6,67.6 64.6,60.2 72,63.9   "
                  d="M73.752 73.035L66.172 69.245L66.172 61.665L73.752 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,71 80,61.7 80,61.1 79.4,60.8 73.1,69.5   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L81.332 62.279L74.878 71.191Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,71 80,61.7 80,61.1 73.1,70.4   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L74.878 72.113Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,47.6 40,48.2 72,64.2 80,60.2 80,59.6 48,43.6   "
                  d="M40.973 48.758L40.973 49.373L73.752 65.762L81.946 61.665L81.946 61.05L49.168 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="72,64.2 40,48.2 40,47.6 72,63.6   "
                  d="M73.752 65.762L40.973 49.373L40.973 48.758L73.752 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="72,64.2 80,60.2 80,59.6 72,63.6   "
                  d="M73.752 65.762L81.946 61.665L81.946 61.05L73.752 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,44.2 63.4,51.6 56,55.3 48.6,51.6 48.6,44.2 56,40.5   "
                  d="M64.942 45.275L64.942 52.855L57.362 56.645L49.782 52.855L49.782 45.275L57.362 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="56,55.3 63.4,51.6 63.4,44.2 56,47.9   "
                  d="M57.362 56.645L64.942 52.855L64.942 45.275L57.362 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,41.9 60.6,42.8 53.2,46.5 53.2,50.1 51.4,49.2 51.4,45.6   "
                  d="M60.23 42.919L62.074 43.841L54.494 47.631L54.494 51.319L52.65 50.397L52.65 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="56,55.3 48.6,51.6 48.6,44.2 56,47.9   "
                  d="M57.362 56.645L49.782 52.855L49.782 45.275L57.362 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,48.2 71.4,55.6 64,59.3 56.6,55.6 56.6,48.2 64,44.5   "
                  d="M73.137 49.373L73.137 56.953L65.557 60.743L57.977 56.953L57.977 49.373L65.557 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="64,59.3 71.4,55.6 71.4,48.2 64,51.9   "
                  d="M65.557 60.743L73.137 56.953L73.137 49.373L65.557 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,45.9 68.6,46.8 61.2,50.5 61.2,54.1 59.4,53.2 59.4,49.6   "
                  d="M68.425 47.017L70.269 47.939L62.689 51.729L62.689 55.416L60.845 54.494L60.845 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="64,59.3 56.6,55.6 56.6,48.2 64,51.9   "
                  d="M65.557 60.743L57.977 56.953L57.977 49.373L65.557 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,52.2 79.4,59.6 72,63.3 64.6,59.6 64.6,52.2 72,48.5   "
                  d="M81.332 53.47L81.332 61.05L73.752 64.84L66.172 61.05L66.172 53.47L73.752 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="72,63.3 79.4,59.6 79.4,52.2 72,55.9   "
                  d="M73.752 64.84L81.332 61.05L81.332 53.47L73.752 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,49.9 76.6,50.8 69.2,54.5 69.2,58.1 67.4,57.2 67.4,53.6   "
                  d="M76.62 51.114L78.464 52.036L70.883 55.826L70.883 59.513L69.04 58.592L69.04 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="72,63.3 64.6,59.6 64.6,52.2 72,55.9   "
                  d="M73.752 64.84L66.172 61.05L66.172 53.47L73.752 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,39.6 40,40.2 72,56.2 80,52.2 80,51.6 48,35.6   "
                  d="M40.973 40.563L40.973 41.178L73.752 57.567L81.946 53.47L81.946 52.855L49.168 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="72,56.2 40,40.2 40,39.6 72,55.6   "
                  d="M73.752 57.567L40.973 41.178L40.973 40.563L73.752 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="72,56.2 80,52.2 80,51.6 72,55.6   "
                  d="M73.752 57.567L81.946 53.47L81.946 52.855L73.752 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,36.2 63.4,43.6 56,47.3 48.6,43.6 48.6,36.2 56,32.5   "
                  d="M64.942 37.081L64.942 44.661L57.362 48.451L49.782 44.661L49.782 37.081L57.362 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="56,47.3 63.4,43.6 63.4,36.2 56,39.9   "
                  d="M57.362 48.451L64.942 44.661L64.942 37.081L57.362 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,33.9 60.6,34.8 53.2,38.5 53.2,42.1 51.4,41.2 51.4,37.6   "
                  d="M60.23 34.725L62.074 35.647L54.494 39.437L54.494 43.124L52.65 42.202L52.65 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="56,47.3 48.6,43.6 48.6,36.2 56,39.9   "
                  d="M57.362 48.451L49.782 44.661L49.782 37.081L57.362 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,40.2 71.4,47.6 64,51.3 56.6,47.6 56.6,40.2 64,36.5   "
                  d="M73.137 41.178L73.137 48.758L65.557 52.548L57.977 48.758L57.977 41.178L65.557 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="64,51.3 71.4,47.6 71.4,40.2 64,43.9   "
                  d="M65.557 52.548L73.137 48.758L73.137 41.178L65.557 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,37.9 68.6,38.8 61.2,42.5 61.2,46.1 59.4,45.2 59.4,41.6   "
                  d="M68.425 38.822L70.269 39.744L62.689 43.534L62.689 47.222L60.845 46.3L60.845 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="64,51.3 56.6,47.6 56.6,40.2 64,43.9   "
                  d="M65.557 52.548L57.977 48.758L57.977 41.178L65.557 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,44.2 79.4,51.6 72,55.3 64.6,51.6 64.6,44.2 72,40.5   "
                  d="M81.332 45.275L81.332 52.855L73.752 56.645L66.172 52.855L66.172 45.275L73.752 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="72,55.3 79.4,51.6 79.4,44.2 72,47.9   "
                  d="M73.752 56.645L81.332 52.855L81.332 45.275L73.752 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,41.9 76.6,42.8 69.2,46.5 69.2,50.1 67.4,49.2 67.4,45.6   "
                  d="M76.62 42.919L78.464 43.841L70.883 47.631L70.883 51.319L69.04 50.397L69.04 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="72,55.3 64.6,51.6 64.6,44.2 72,47.9   "
                  d="M73.752 56.645L66.172 52.855L66.172 45.275L73.752 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,54.9 80,45.6 80,45 79.4,44.7 73.1,53.4   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L81.332 45.787L74.878 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,54.9 80,45.6 80,45 73.1,54.3   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L74.878 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,62.9 80,53.6 80,53 79.4,52.7 73.1,61.4   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L81.332 53.982L74.878 62.894Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,62.9 80,53.6 80,53 73.1,62.3   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L74.878 63.816Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="70.8,48 70.8,112 72,112.6 73.2,112 73.2,48 72,47.4   "
                  d="M72.522 49.168L72.522 114.725L73.752 115.339L74.981 114.725L74.981 49.168L73.752 48.553Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.6 70.8,112 70.8,48 72,48.6   "
                  d="M73.752 115.339L72.522 114.725L72.522 49.168L73.752 49.782Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.6 73.2,112 73.2,48 72,48.6   "
                  d="M73.752 115.339L74.981 114.725L74.981 49.168L73.752 49.782Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-5" className="lvl-1" transform={selectedGroup === 5 ? 'translate(50%,50%)':'matrix(-1 0 0 1 360 320)'} onClick={() => handleClick(5)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-6" className="lvl-1" transform={selectedGroup === 6 ? 'translate(50%,50%)':'matrix(-1 0 0 1 392 336)'} onClick={() => handleClick(6)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="17.1,19 24,9.7 24,9.1 23.4,8.8 17.1,17.5   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L23.969 9.014L17.516 17.926Z"
                />
                <path
                  opacity={0.11}
                  points="17.1,19 24,9.7 24,9.1 17.1,18.4   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L17.516 18.848Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,38.9 16,29.6 16,29 15.4,28.7 9.1,37.4   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L15.775 29.398L9.321 38.31Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,38.9 16,29.6 16,29 9.1,38.3   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L9.321 39.232Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-7" className="lvl-1" transform={selectedGroup === 7 ? 'translate(50%,50%)':'matrix(-1 0 0 1 328 336)'} onClick={() => handleClick(7)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="17.1,19 24,9.7 24,9.1 23.4,8.8 17.1,17.5   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L23.969 9.014L17.516 17.926Z"
                />
                <path
                  opacity={0.11}
                  points="17.1,19 24,9.7 24,9.1 17.1,18.4   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L17.516 18.848Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,38.9 16,29.6 16,29 15.4,28.7 9.1,37.4   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L15.775 29.398L9.321 38.31Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,38.9 16,29.6 16,29 9.1,38.3   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L9.321 39.232Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-8" className="lvl-1" transform={selectedGroup === 8 ? 'translate(50%,50%)':'matrix(-1 0 0 1 360 352)'} onClick={() => handleClick(8)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="17.1,19 24,9.7 24,9.1 23.4,8.8 17.1,17.5   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L23.969 9.014L17.516 17.926Z"
                />
                <path
                  opacity={0.11}
                  points="17.1,19 24,9.7 24,9.1 17.1,18.4   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L17.516 18.848Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,30.9 16,21.6 16,21 15.4,20.7 9.1,29.4   "
                  d="M9.321 31.652L16.389 22.125L16.389 21.511L15.775 21.204L9.321 30.115Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,30.9 16,21.6 16,21 9.1,30.3   "
                  d="M9.321 31.652L16.389 22.125L16.389 21.511L9.321 31.037Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,38.9 16,29.6 16,29 15.4,28.7 9.1,37.4   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L15.775 29.398L9.321 38.31Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,38.9 16,29.6 16,29 9.1,38.3   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L9.321 39.232Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,23 16,13.7 16,13.1 15.4,12.8 9.1,21.5   "
                  d="M9.321 23.56L16.389 14.033L16.389 13.419L15.775 13.111L9.321 22.023Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,23 16,13.7 16,13.1 9.1,22.4   "
                  d="M9.321 23.56L16.389 14.033L16.389 13.419L9.321 22.945Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-9" className="lvl-1" transform={selectedGroup === 9 ? 'translate(50%,50%)':'matrix(-1 0 0 1 424 352)'} onClick={() => handleClick(9)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-10" className="lvl-1" transform={selectedGroup === 10 ? 'translate(50%,50%)':'matrix(-1 0 0 1 456 368)'} onClick={() => handleClick(10)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="17.1,19 24,9.7 24,9.1 23.4,8.8 17.1,17.5   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L23.969 9.014L17.516 17.926Z"
                />
                <path
                  opacity={0.11}
                  points="17.1,19 24,9.7 24,9.1 17.1,18.4   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L17.516 18.848Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,38.9 16,29.6 16,29 15.4,28.7 9.1,37.4   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L15.775 29.398L9.321 38.31Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,38.9 16,29.6 16,29 9.1,38.3   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L9.321 39.232Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-11" className="lvl-1" transform={selectedGroup === 11 ? 'translate(50%,50%)':'matrix(-1 0 0 1 392 368)'} onClick={() => handleClick(11)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="17.1,19 24,9.7 24,9.1 23.4,8.8 17.1,17.5   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L23.969 9.014L17.516 17.926Z"
                />
                <path
                  opacity={0.11}
                  points="17.1,19 24,9.7 24,9.1 17.1,18.4   "
                  d="M17.516 19.462L24.584 9.936L24.584 9.321L17.516 18.848Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="9.1,38.9 16,29.6 16,29 15.4,28.7 9.1,37.4   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L15.775 29.398L9.321 38.31Z"
                />
                <path
                  opacity={0.11}
                  points="9.1,38.9 16,29.6 16,29 9.1,38.3   "
                  d="M9.321 39.846L16.389 30.32L16.389 29.706L9.321 39.232Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-12" className="lvl-1" transform={selectedGroup === 12 ? 'translate(50%,50%)':'matrix(-1 0 0 1 424 384)'} onClick={() => handleClick(12)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,32 24,32.6 25.2,32 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 32.778L24.584 33.393L25.813 32.778L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,32.6 22.8,32 22.8,8 24,8.6   "
                  d="M24.584 33.393L23.355 32.778L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,32.6 25.2,32 25.2,8 24,8.6   "
                  d="M24.584 33.393L25.813 32.778L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,48 56,48.6 57.2,48 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 49.168L57.362 49.782L58.592 49.168L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,48.6 54.8,48 54.8,24 56,24.6   "
                  d="M57.362 49.782L56.133 49.168L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,48.6 57.2,48 57.2,24 56,24.6   "
                  d="M57.362 49.782L58.592 49.168L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,35.6 16,36.2 48,52.2 56,48.2 56,47.6 24,31.6   "
                  d="M16.389 36.466L16.389 37.081L49.168 53.47L57.362 49.373L57.362 48.758L24.584 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.2 16,36.2 16,35.6 48,51.6   "
                  d="M49.168 53.47L16.389 37.081L16.389 36.466L49.168 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.2 56,48.2 56,47.6 48,51.6   "
                  d="M49.168 53.47L57.362 49.373L57.362 48.758L49.168 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,27.6 16,28.2 48,44.2 56,40.2 56,39.6 24,23.6   "
                  d="M16.389 28.271L16.389 28.886L49.168 45.275L57.362 41.178L57.362 40.563L24.584 24.174Z"
                />
                <path
                  opacity={0.29}
                  points="48,44.2 16,28.2 16,27.6 48,43.6   "
                  d="M49.168 45.275L16.389 28.886L16.389 28.271L49.168 44.661Z"
                />
                <path
                  opacity={0.11}
                  points="48,44.2 56,40.2 56,39.6 48,43.6   "
                  d="M49.168 45.275L57.362 41.178L57.362 40.563L49.168 44.661Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,42.9 56,33.6 56,33 55.4,32.7 49.1,41.4   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L56.748 33.496L50.294 42.407Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,42.9 56,33.6 56,33 49.1,42.3   "
                  d="M50.294 43.944L57.362 34.417L57.362 33.803L50.294 43.329Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,50.9 56,41.6 56,41 55.4,40.7 49.1,49.4   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L56.748 41.69L50.294 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,50.9 56,41.6 56,41 49.1,50.3   "
                  d="M50.294 52.138L57.362 42.612L57.362 41.997L50.294 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="16,19.6 16,20.2 48,36.2 56,32.2 56,31.6 24,15.6   "
                  d="M16.389 20.077L16.389 20.691L49.168 37.081L57.362 32.983L57.362 32.369L24.584 15.98Z"
                />
                <path
                  opacity={0.29}
                  points="48,36.2 16,20.2 16,19.6 48,35.6   "
                  d="M49.168 37.081L16.389 20.691L16.389 20.077L49.168 36.466Z"
                />
                <path
                  opacity={0.11}
                  points="48,36.2 56,32.2 56,31.6 48,35.6   "
                  d="M49.168 37.081L57.362 32.983L57.362 32.369L49.168 36.466Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="49.1,35 56,25.7 56,25.1 55.4,24.8 49.1,33.5   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L56.748 25.403L50.294 34.315Z"
                />
                <path
                  opacity={0.11}
                  points="49.1,35 56,25.7 56,25.1 49.1,34.4   "
                  d="M50.294 35.851L57.362 26.325L57.362 25.711L50.294 35.237Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,36 16,36.6 17.2,36 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 36.876L16.389 37.49L17.618 36.876L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,36.6 14.8,36 14.8,12 16,12.6   "
                  d="M16.389 37.49L15.16 36.876L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,36.6 17.2,36 17.2,12 16,12.6   "
                  d="M16.389 37.49L17.618 36.876L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,52 48,52.6 49.2,52 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 53.265L49.168 53.88L50.397 53.265L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,52.6 46.8,52 46.8,28 48,28.6   "
                  d="M49.168 53.88L47.939 53.265L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,52.6 49.2,52 49.2,28 48,28.6   "
                  d="M49.168 53.88L50.397 53.265L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,40 8,40.6 9.2,40 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 40.973L8.195 41.588L9.424 40.973L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,40.6 6.8,40 6.8,16 8,16.6   "
                  d="M8.195 41.588L6.965 40.973L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,40.6 9.2,40 9.2,16 8,16.6   "
                  d="M8.195 41.588L9.424 40.973L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,46.9 48,37.6 48,37 47.4,36.7 41.1,45.4   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L48.553 37.593L42.1 46.504Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,46.9 48,37.6 48,37 41.1,46.3   "
                  d="M42.1 48.041L49.168 38.515L49.168 37.9L42.1 47.426Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,54.9 48,45.6 48,45 47.4,44.7 41.1,53.4   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L48.553 45.787L42.1 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,54.9 48,45.6 48,45 41.1,54.3   "
                  d="M42.1 56.236L49.168 46.709L49.168 46.095L42.1 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="41.1,39 48,29.7 48,29.1 47.4,28.8 41.1,37.5   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L48.553 29.501L42.1 38.412Z"
                />
                <path
                  opacity={0.11}
                  points="41.1,39 48,29.7 48,29.1 41.1,38.4   "
                  d="M42.1 39.949L49.168 30.423L49.168 29.808L42.1 39.334Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,56 40,56.6 41.2,56 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 57.362L40.973 57.977L42.202 57.362L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.6 38.8,56 38.8,32 40,32.6   "
                  d="M40.973 57.977L39.744 57.362L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.6 41.2,56 41.2,32 40,32.6   "
                  d="M40.973 57.977L42.202 57.362L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-3" className="lvl-1" transform={selectedGroup === 3 ? 'translate(50%,50%)':'matrix(-1 0 0 1 704 240)'} onClick={() => handleClick(3)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,72 24,72.6 25.2,72 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 73.752L24.584 74.366L25.813 73.752L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,72.6 22.8,72 22.8,8 24,8.6   "
                  d="M24.584 74.366L23.355 73.752L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,72.6 25.2,72 25.2,8 24,8.6   "
                  d="M24.584 74.366L25.813 73.752L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,88 56,88.6 57.2,88 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 90.141L57.362 90.755L58.592 90.141L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,88.6 54.8,88 54.8,24 56,24.6   "
                  d="M57.362 90.755L56.133 90.141L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,88.6 57.2,88 57.2,24 56,24.6   "
                  d="M57.362 90.755L58.592 90.141L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,80 8,80.6 9.2,80 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 81.946L8.195 82.561L9.424 81.946L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,80.6 6.8,80 6.8,16 8,16.6   "
                  d="M8.195 82.561L6.965 81.946L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,80.6 9.2,80 9.2,16 8,16.6   "
                  d="M8.195 82.561L9.424 81.946L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,79.6 8,80.2 40,96.2 48,92.2 48,91.6 16,75.6   "
                  d="M8.195 81.536L8.195 82.151L40.973 98.54L49.168 94.443L49.168 93.828L16.389 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.2 8,80.2 8,79.6 40,95.6   "
                  d="M40.973 98.54L8.195 82.151L8.195 81.536L40.973 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.2 48,92.2 48,91.6 40,95.6   "
                  d="M40.973 98.54L49.168 94.443L49.168 93.828L40.973 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,72.2 23.4,79.6 16,83.3 8.6,79.6 8.6,72.2 16,68.5   "
                  d="M23.969 73.956L23.969 81.536L16.389 85.327L8.809 81.536L8.809 73.956L16.389 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="16,83.3 23.4,79.6 23.4,72.2 16,75.9   "
                  d="M16.389 85.327L23.969 81.536L23.969 73.956L16.389 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,69.9 20.6,70.8 13.2,74.5 13.2,78.1 11.4,77.2 11.4,73.6   "
                  d="M19.257 71.601L21.101 72.522L13.521 76.312L13.521 80L11.677 79.078L11.677 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="16,83.3 8.6,79.6 8.6,72.2 16,75.9   "
                  d="M16.389 85.327L8.809 81.536L8.809 73.956L16.389 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,76.2 31.4,83.6 24,87.3 16.6,83.6 16.6,76.2 24,72.5   "
                  d="M32.164 78.054L32.164 85.634L24.584 89.424L17.004 85.634L17.004 78.054L24.584 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="24,87.3 31.4,83.6 31.4,76.2 24,79.9   "
                  d="M24.584 89.424L32.164 85.634L32.164 78.054L24.584 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,73.9 28.6,74.8 21.2,78.5 21.2,82.1 19.4,81.2 19.4,77.6   "
                  d="M27.452 75.698L29.296 76.62L21.716 80.41L21.716 84.097L19.872 83.175L19.872 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="24,87.3 16.6,83.6 16.6,76.2 24,79.9   "
                  d="M24.584 89.424L17.004 85.634L17.004 78.054L24.584 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,80.2 39.4,87.6 32,91.3 24.6,87.6 24.6,80.2 32,76.5   "
                  d="M40.359 82.151L40.359 89.731L32.778 93.521L25.198 89.731L25.198 82.151L32.778 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="32,91.3 39.4,87.6 39.4,80.2 32,83.9   "
                  d="M32.778 93.521L40.359 89.731L40.359 82.151L32.778 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,77.9 36.6,78.8 29.2,82.5 29.2,86.1 27.4,85.2 27.4,81.6   "
                  d="M35.647 79.795L37.49 80.717L29.91 84.507L29.91 88.195L28.067 87.273L28.067 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="32,91.3 24.6,87.6 24.6,80.2 32,83.9   "
                  d="M32.778 93.521L25.198 89.731L25.198 82.151L32.778 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,84.2 47.4,91.6 40,95.3 32.6,91.6 32.6,84.2 40,80.5   "
                  d="M48.553 86.248L48.553 93.828L40.973 97.618L33.393 93.828L33.393 86.248L40.973 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="40,95.3 47.4,91.6 47.4,84.2 40,87.9   "
                  d="M40.973 97.618L48.553 93.828L48.553 86.248L40.973 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,81.9 44.6,82.8 37.2,86.5 37.2,90.1 35.4,89.2 35.4,85.6   "
                  d="M43.841 83.892L45.685 84.814L38.105 88.604L38.105 92.292L36.261 91.37L36.261 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="40,95.3 32.6,91.6 32.6,84.2 40,87.9   "
                  d="M40.973 97.618L33.393 93.828L33.393 86.248L40.973 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,71.6 8,72.2 40,88.2 48,84.2 48,83.6 16,67.6   "
                  d="M8.195 73.342L8.195 73.956L40.973 90.346L49.168 86.248L49.168 85.634L16.389 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="40,88.2 8,72.2 8,71.6 40,87.6   "
                  d="M40.973 90.346L8.195 73.956L8.195 73.342L40.973 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="40,88.2 48,84.2 48,83.6 40,87.6   "
                  d="M40.973 90.346L49.168 86.248L49.168 85.634L40.973 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,64.2 23.4,71.6 16,75.3 8.6,71.6 8.6,64.2 16,60.5   "
                  d="M23.969 65.762L23.969 73.342L16.389 77.132L8.809 73.342L8.809 65.762L16.389 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="16,75.3 23.4,71.6 23.4,64.2 16,67.9   "
                  d="M16.389 77.132L23.969 73.342L23.969 65.762L16.389 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,61.9 20.6,62.8 13.2,66.5 13.2,70.1 11.4,69.2 11.4,65.6   "
                  d="M19.257 63.406L21.101 64.328L13.521 68.118L13.521 71.805L11.677 70.883L11.677 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="16,75.3 8.6,71.6 8.6,64.2 16,67.9   "
                  d="M16.389 77.132L8.809 73.342L8.809 65.762L16.389 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,68.2 31.4,75.6 24,79.3 16.6,75.6 16.6,68.2 24,64.5   "
                  d="M32.164 69.859L32.164 77.439L24.584 81.229L17.004 77.439L17.004 69.859L24.584 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="24,79.3 31.4,75.6 31.4,68.2 24,71.9   "
                  d="M24.584 81.229L32.164 77.439L32.164 69.859L24.584 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,65.9 28.6,66.8 21.2,70.5 21.2,74.1 19.4,73.2 19.4,69.6   "
                  d="M27.452 67.503L29.296 68.425L21.716 72.215L21.716 75.903L19.872 74.981L19.872 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="24,79.3 16.6,75.6 16.6,68.2 24,71.9   "
                  d="M24.584 81.229L17.004 77.439L17.004 69.859L24.584 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,72.2 39.4,79.6 32,83.3 24.6,79.6 24.6,72.2 32,68.5   "
                  d="M40.359 73.956L40.359 81.536L32.778 85.327L25.198 81.536L25.198 73.956L32.778 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="32,83.3 39.4,79.6 39.4,72.2 32,75.9   "
                  d="M32.778 85.327L40.359 81.536L40.359 73.956L32.778 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,69.9 36.6,70.8 29.2,74.5 29.2,78.1 27.4,77.2 27.4,73.6   "
                  d="M35.647 71.601L37.49 72.522L29.91 76.312L29.91 80L28.067 79.078L28.067 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="32,83.3 24.6,79.6 24.6,72.2 32,75.9   "
                  d="M32.778 85.327L25.198 81.536L25.198 73.956L32.778 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,76.2 47.4,83.6 40,87.3 32.6,83.6 32.6,76.2 40,72.5   "
                  d="M48.553 78.054L48.553 85.634L40.973 89.424L33.393 85.634L33.393 78.054L40.973 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="40,87.3 47.4,83.6 47.4,76.2 40,79.9   "
                  d="M40.973 89.424L48.553 85.634L48.553 78.054L40.973 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,73.9 44.6,74.8 37.2,78.5 37.2,82.1 35.4,81.2 35.4,77.6   "
                  d="M43.841 75.698L45.685 76.62L38.105 80.41L38.105 84.097L36.261 83.175L36.261 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="40,87.3 32.6,83.6 32.6,76.2 40,79.9   "
                  d="M40.973 89.424L33.393 85.634L33.393 78.054L40.973 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,63.6 8,64.2 40,80.2 48,76.2 48,75.6 16,59.6   "
                  d="M8.195 65.147L8.195 65.762L40.973 82.151L49.168 78.054L49.168 77.439L16.389 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="40,80.2 8,64.2 8,63.6 40,79.6   "
                  d="M40.973 82.151L8.195 65.762L8.195 65.147L40.973 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="40,80.2 48,76.2 48,75.6 40,79.6   "
                  d="M40.973 82.151L49.168 78.054L49.168 77.439L40.973 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,56.2 23.4,63.6 16,67.3 8.6,63.6 8.6,56.2 16,52.5   "
                  d="M23.969 57.567L23.969 65.147L16.389 68.937L8.809 65.147L8.809 57.567L16.389 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="16,67.3 23.4,63.6 23.4,56.2 16,59.9   "
                  d="M16.389 68.937L23.969 65.147L23.969 57.567L16.389 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,53.9 20.6,54.8 13.2,58.5 13.2,62.1 11.4,61.2 11.4,57.6   "
                  d="M19.257 55.211L21.101 56.133L13.521 59.923L13.521 63.611L11.677 62.689L11.677 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="16,67.3 8.6,63.6 8.6,56.2 16,59.9   "
                  d="M16.389 68.937L8.809 65.147L8.809 57.567L16.389 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,60.2 31.4,67.6 24,71.3 16.6,67.6 16.6,60.2 24,56.5   "
                  d="M32.164 61.665L32.164 69.245L24.584 73.035L17.004 69.245L17.004 61.665L24.584 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="24,71.3 31.4,67.6 31.4,60.2 24,63.9   "
                  d="M24.584 73.035L32.164 69.245L32.164 61.665L24.584 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,57.9 28.6,58.8 21.2,62.5 21.2,66.1 19.4,65.2 19.4,61.6   "
                  d="M27.452 59.309L29.296 60.23L21.716 64.02L21.716 67.708L19.872 66.786L19.872 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="24,71.3 16.6,67.6 16.6,60.2 24,63.9   "
                  d="M24.584 73.035L17.004 69.245L17.004 61.665L24.584 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,64.2 39.4,71.6 32,75.3 24.6,71.6 24.6,64.2 32,60.5   "
                  d="M40.359 65.762L40.359 73.342L32.778 77.132L25.198 73.342L25.198 65.762L32.778 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="32,75.3 39.4,71.6 39.4,64.2 32,67.9   "
                  d="M32.778 77.132L40.359 73.342L40.359 65.762L32.778 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,61.9 36.6,62.8 29.2,66.5 29.2,70.1 27.4,69.2 27.4,65.6   "
                  d="M35.647 63.406L37.49 64.328L29.91 68.118L29.91 71.805L28.067 70.883L28.067 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="32,75.3 24.6,71.6 24.6,64.2 32,67.9   "
                  d="M32.778 77.132L25.198 73.342L25.198 65.762L32.778 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,68.2 47.4,75.6 40,79.3 32.6,75.6 32.6,68.2 40,64.5   "
                  d="M48.553 69.859L48.553 77.439L40.973 81.229L33.393 77.439L33.393 69.859L40.973 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="40,79.3 47.4,75.6 47.4,68.2 40,71.9   "
                  d="M40.973 81.229L48.553 77.439L48.553 69.859L40.973 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,65.9 44.6,66.8 37.2,70.5 37.2,74.1 35.4,73.2 35.4,69.6   "
                  d="M43.841 67.503L45.685 68.425L38.105 72.215L38.105 75.903L36.261 74.981L36.261 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="40,79.3 32.6,75.6 32.6,68.2 40,71.9   "
                  d="M40.973 81.229L33.393 77.439L33.393 69.859L40.973 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,55.6 8,56.2 40,72.2 48,68.2 48,67.6 16,51.6   "
                  d="M8.195 56.953L8.195 57.567L40.973 73.956L49.168 69.859L49.168 69.245L16.389 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="40,72.2 8,56.2 8,55.6 40,71.6   "
                  d="M40.973 73.956L8.195 57.567L8.195 56.953L40.973 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="40,72.2 48,68.2 48,67.6 40,71.6   "
                  d="M40.973 73.956L49.168 69.859L49.168 69.245L40.973 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,48.2 23.4,55.6 16,59.3 8.6,55.6 8.6,48.2 16,44.5   "
                  d="M23.969 49.373L23.969 56.953L16.389 60.743L8.809 56.953L8.809 49.373L16.389 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="16,59.3 23.4,55.6 23.4,48.2 16,51.9   "
                  d="M16.389 60.743L23.969 56.953L23.969 49.373L16.389 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,45.9 20.6,46.8 13.2,50.5 13.2,54.1 11.4,53.2 11.4,49.6   "
                  d="M19.257 47.017L21.101 47.939L13.521 51.729L13.521 55.416L11.677 54.494L11.677 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="16,59.3 8.6,55.6 8.6,48.2 16,51.9   "
                  d="M16.389 60.743L8.809 56.953L8.809 49.373L16.389 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,52.2 31.4,59.6 24,63.3 16.6,59.6 16.6,52.2 24,48.5   "
                  d="M32.164 53.47L32.164 61.05L24.584 64.84L17.004 61.05L17.004 53.47L24.584 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="24,63.3 31.4,59.6 31.4,52.2 24,55.9   "
                  d="M24.584 64.84L32.164 61.05L32.164 53.47L24.584 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,49.9 28.6,50.8 21.2,54.5 21.2,58.1 19.4,57.2 19.4,53.6   "
                  d="M27.452 51.114L29.296 52.036L21.716 55.826L21.716 59.513L19.872 58.592L19.872 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="24,63.3 16.6,59.6 16.6,52.2 24,55.9   "
                  d="M24.584 64.84L17.004 61.05L17.004 53.47L24.584 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,56.2 39.4,63.6 32,67.3 24.6,63.6 24.6,56.2 32,52.5   "
                  d="M40.359 57.567L40.359 65.147L32.778 68.937L25.198 65.147L25.198 57.567L32.778 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="32,67.3 39.4,63.6 39.4,56.2 32,59.9   "
                  d="M32.778 68.937L40.359 65.147L40.359 57.567L32.778 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,53.9 36.6,54.8 29.2,58.5 29.2,62.1 27.4,61.2 27.4,57.6   "
                  d="M35.647 55.211L37.49 56.133L29.91 59.923L29.91 63.611L28.067 62.689L28.067 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="32,67.3 24.6,63.6 24.6,56.2 32,59.9   "
                  d="M32.778 68.937L25.198 65.147L25.198 57.567L32.778 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,60.2 47.4,67.6 40,71.3 32.6,67.6 32.6,60.2 40,56.5   "
                  d="M48.553 61.665L48.553 69.245L40.973 73.035L33.393 69.245L33.393 61.665L40.973 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="40,71.3 47.4,67.6 47.4,60.2 40,63.9   "
                  d="M40.973 73.035L48.553 69.245L48.553 61.665L40.973 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,57.9 44.6,58.8 37.2,62.5 37.2,66.1 35.4,65.2 35.4,61.6   "
                  d="M43.841 59.309L45.685 60.23L38.105 64.02L38.105 67.708L36.261 66.786L36.261 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="40,71.3 32.6,67.6 32.6,60.2 40,63.9   "
                  d="M40.973 73.035L33.393 69.245L33.393 61.665L40.973 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,47.6 8,48.2 40,64.2 48,60.2 48,59.6 16,43.6   "
                  d="M8.195 48.758L8.195 49.373L40.973 65.762L49.168 61.665L49.168 61.05L16.389 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="40,64.2 8,48.2 8,47.6 40,63.6   "
                  d="M40.973 65.762L8.195 49.373L8.195 48.758L40.973 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="40,64.2 48,60.2 48,59.6 40,63.6   "
                  d="M40.973 65.762L49.168 61.665L49.168 61.05L40.973 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,40.2 23.4,47.6 16,51.3 8.6,47.6 8.6,40.2 16,36.5   "
                  d="M23.969 41.178L23.969 48.758L16.389 52.548L8.809 48.758L8.809 41.178L16.389 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="16,51.3 23.4,47.6 23.4,40.2 16,43.9   "
                  d="M16.389 52.548L23.969 48.758L23.969 41.178L16.389 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,37.9 20.6,38.8 13.2,42.5 13.2,46.1 11.4,45.2 11.4,41.6   "
                  d="M19.257 38.822L21.101 39.744L13.521 43.534L13.521 47.222L11.677 46.3L11.677 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="16,51.3 8.6,47.6 8.6,40.2 16,43.9   "
                  d="M16.389 52.548L8.809 48.758L8.809 41.178L16.389 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,44.2 31.4,51.6 24,55.3 16.6,51.6 16.6,44.2 24,40.5   "
                  d="M32.164 45.275L32.164 52.855L24.584 56.645L17.004 52.855L17.004 45.275L24.584 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="24,55.3 31.4,51.6 31.4,44.2 24,47.9   "
                  d="M24.584 56.645L32.164 52.855L32.164 45.275L24.584 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,41.9 28.6,42.8 21.2,46.5 21.2,50.1 19.4,49.2 19.4,45.6   "
                  d="M27.452 42.919L29.296 43.841L21.716 47.631L21.716 51.319L19.872 50.397L19.872 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="24,55.3 16.6,51.6 16.6,44.2 24,47.9   "
                  d="M24.584 56.645L17.004 52.855L17.004 45.275L24.584 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,48.2 39.4,55.6 32,59.3 24.6,55.6 24.6,48.2 32,44.5   "
                  d="M40.359 49.373L40.359 56.953L32.778 60.743L25.198 56.953L25.198 49.373L32.778 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="32,59.3 39.4,55.6 39.4,48.2 32,51.9   "
                  d="M32.778 60.743L40.359 56.953L40.359 49.373L32.778 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,45.9 36.6,46.8 29.2,50.5 29.2,54.1 27.4,53.2 27.4,49.6   "
                  d="M35.647 47.017L37.49 47.939L29.91 51.729L29.91 55.416L28.067 54.494L28.067 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="32,59.3 24.6,55.6 24.6,48.2 32,51.9   "
                  d="M32.778 60.743L25.198 56.953L25.198 49.373L32.778 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,52.2 47.4,59.6 40,63.3 32.6,59.6 32.6,52.2 40,48.5   "
                  d="M48.553 53.47L48.553 61.05L40.973 64.84L33.393 61.05L33.393 53.47L40.973 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="40,63.3 47.4,59.6 47.4,52.2 40,55.9   "
                  d="M40.973 64.84L48.553 61.05L48.553 53.47L40.973 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,49.9 44.6,50.8 37.2,54.5 37.2,58.1 35.4,57.2 35.4,53.6   "
                  d="M43.841 51.114L45.685 52.036L38.105 55.826L38.105 59.513L36.261 58.592L36.261 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="40,63.3 32.6,59.6 32.6,52.2 40,55.9   "
                  d="M40.973 64.84L33.393 61.05L33.393 53.47L40.973 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,96 40,96.6 41.2,96 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 98.335L40.973 98.95L42.202 98.335L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.6 38.8,96 38.8,32 40,32.6   "
                  d="M40.973 98.95L39.744 98.335L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.6 41.2,96 41.2,32 40,32.6   "
                  d="M40.973 98.95L42.202 98.335L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="86.8,40 86.8,104 88,104.6 89.2,104 89.2,40 88,39.4   "
                  d="M88.912 40.973L88.912 106.53L90.141 107.145L91.37 106.53L91.37 40.973L90.141 40.359Z"
                />
                <path
                  opacity={0.29}
                  points="88,104.6 86.8,104 86.8,40 88,40.6   "
                  d="M90.141 107.145L88.912 106.53L88.912 40.973L90.141 41.588Z"
                />
                <path
                  opacity={0.11}
                  points="88,104.6 89.2,104 89.2,40 88,40.6   "
                  d="M90.141 107.145L91.37 106.53L91.37 40.973L90.141 41.588Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,91.6 48,92.2 80,108.2 88,104.2 88,103.6 56,87.6   "
                  d="M49.168 93.828L49.168 94.443L81.946 110.832L90.141 106.735L90.141 106.12L57.362 89.731Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.2 48,92.2 48,91.6 80,107.6   "
                  d="M81.946 110.832L49.168 94.443L49.168 93.828L81.946 110.218Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.2 88,104.2 88,103.6 80,107.6   "
                  d="M81.946 110.832L90.141 106.735L90.141 106.12L81.946 110.218Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,96.2 87.4,103.6 80,107.3 72.6,103.6 72.6,96.2 80,92.5   "
                  d="M89.526 98.54L89.526 106.12L81.946 109.91L74.366 106.12L74.366 98.54L81.946 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="80,107.3 87.4,103.6 87.4,96.2 80,99.9   "
                  d="M81.946 109.91L89.526 106.12L89.526 98.54L81.946 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,93.9 84.6,94.8 77.2,98.5 77.2,102.1 75.4,101.2 75.4,97.6   "
                  d="M84.814 96.184L86.658 97.106L79.078 100.896L79.078 104.584L77.234 103.662L77.234 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="80,107.3 72.6,103.6 72.6,96.2 80,99.9   "
                  d="M81.946 109.91L74.366 106.12L74.366 98.54L81.946 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,83.6 48,84.2 80,100.2 88,96.2 88,95.6 56,79.6   "
                  d="M49.168 85.634L49.168 86.248L81.946 102.638L90.141 98.54L90.141 97.926L57.362 81.536Z"
                />
                <path
                  opacity={0.29}
                  points="80,100.2 48,84.2 48,83.6 80,99.6   "
                  d="M81.946 102.638L49.168 86.248L49.168 85.634L81.946 102.023Z"
                />
                <path
                  opacity={0.11}
                  points="80,100.2 88,96.2 88,95.6 80,99.6   "
                  d="M81.946 102.638L90.141 98.54L90.141 97.926L81.946 102.023Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,88.2 87.4,95.6 80,99.3 72.6,95.6 72.6,88.2 80,84.5   "
                  d="M89.526 90.346L89.526 97.926L81.946 101.716L74.366 97.926L74.366 90.346L81.946 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="80,99.3 87.4,95.6 87.4,88.2 80,91.9   "
                  d="M81.946 101.716L89.526 97.926L89.526 90.346L81.946 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,85.9 84.6,86.8 77.2,90.5 77.2,94.1 75.4,93.2 75.4,89.6   "
                  d="M84.814 87.99L86.658 88.912L79.078 92.702L79.078 96.389L77.234 95.467L77.234 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="80,99.3 72.6,95.6 72.6,88.2 80,91.9   "
                  d="M81.946 101.716L74.366 97.926L74.366 90.346L81.946 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,98.9 88,89.6 88,89 87.4,88.7 81.1,97.4   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L89.526 90.858L83.073 99.77Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,98.9 88,89.6 88,89 81.1,98.3   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L83.073 100.691Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,106.9 88,97.6 88,97 87.4,96.7 81.1,105.4   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L89.526 99.052L83.073 107.964Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,106.9 88,97.6 88,97 81.1,106.3   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L83.073 108.886Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,75.6 48,76.2 80,92.2 88,88.2 88,87.6 56,71.6   "
                  d="M49.168 77.439L49.168 78.054L81.946 94.443L90.141 90.346L90.141 89.731L57.362 73.342Z"
                />
                <path
                  opacity={0.29}
                  points="80,92.2 48,76.2 48,75.6 80,91.6   "
                  d="M81.946 94.443L49.168 78.054L49.168 77.439L81.946 93.828Z"
                />
                <path
                  opacity={0.11}
                  points="80,92.2 88,88.2 88,87.6 80,91.6   "
                  d="M81.946 94.443L90.141 90.346L90.141 89.731L81.946 93.828Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,80.2 87.4,87.6 80,91.3 72.6,87.6 72.6,80.2 80,76.5   "
                  d="M89.526 82.151L89.526 89.731L81.946 93.521L74.366 89.731L74.366 82.151L81.946 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="80,91.3 87.4,87.6 87.4,80.2 80,83.9   "
                  d="M81.946 93.521L89.526 89.731L89.526 82.151L81.946 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,77.9 84.6,78.8 77.2,82.5 77.2,86.1 75.4,85.2 75.4,81.6   "
                  d="M84.814 79.795L86.658 80.717L79.078 84.507L79.078 88.195L77.234 87.273L77.234 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="80,91.3 72.6,87.6 72.6,80.2 80,83.9   "
                  d="M81.946 93.521L74.366 89.731L74.366 82.151L81.946 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,91 88,81.7 88,81.1 87.4,80.8 81.1,89.5   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L89.526 82.766L83.073 91.677Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,91 88,81.7 88,81.1 81.1,90.4   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L83.073 92.599Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,67.6 48,68.2 80,84.2 88,80.2 88,79.6 56,63.6   "
                  d="M49.168 69.245L49.168 69.859L81.946 86.248L90.141 82.151L90.141 81.536L57.362 65.147Z"
                />
                <path
                  opacity={0.29}
                  points="80,84.2 48,68.2 48,67.6 80,83.6   "
                  d="M81.946 86.248L49.168 69.859L49.168 69.245L81.946 85.634Z"
                />
                <path
                  opacity={0.11}
                  points="80,84.2 88,80.2 88,79.6 80,83.6   "
                  d="M81.946 86.248L90.141 82.151L90.141 81.536L81.946 85.634Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,72.2 87.4,79.6 80,83.3 72.6,79.6 72.6,72.2 80,68.5   "
                  d="M89.526 73.956L89.526 81.536L81.946 85.327L74.366 81.536L74.366 73.956L81.946 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="80,83.3 87.4,79.6 87.4,72.2 80,75.9   "
                  d="M81.946 85.327L89.526 81.536L89.526 73.956L81.946 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,69.9 84.6,70.8 77.2,74.5 77.2,78.1 75.4,77.2 75.4,73.6   "
                  d="M84.814 71.601L86.658 72.522L79.078 76.312L79.078 80L77.234 79.078L77.234 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="80,83.3 72.6,79.6 72.6,72.2 80,75.9   "
                  d="M81.946 85.327L74.366 81.536L74.366 73.956L81.946 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,59.6 48,60.2 80,76.2 88,72.2 88,71.6 56,55.6   "
                  d="M49.168 61.05L49.168 61.665L81.946 78.054L90.141 73.956L90.141 73.342L57.362 56.953Z"
                />
                <path
                  opacity={0.29}
                  points="80,76.2 48,60.2 48,59.6 80,75.6   "
                  d="M81.946 78.054L49.168 61.665L49.168 61.05L81.946 77.439Z"
                />
                <path
                  opacity={0.11}
                  points="80,76.2 88,72.2 88,71.6 80,75.6   "
                  d="M81.946 78.054L90.141 73.956L90.141 73.342L81.946 77.439Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,64.2 87.4,71.6 80,75.3 72.6,71.6 72.6,64.2 80,60.5   "
                  d="M89.526 65.762L89.526 73.342L81.946 77.132L74.366 73.342L74.366 65.762L81.946 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="80,75.3 87.4,71.6 87.4,64.2 80,67.9   "
                  d="M81.946 77.132L89.526 73.342L89.526 65.762L81.946 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,61.9 84.6,62.8 77.2,66.5 77.2,70.1 75.4,69.2 75.4,65.6   "
                  d="M84.814 63.406L86.658 64.328L79.078 68.118L79.078 71.805L77.234 70.883L77.234 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="80,75.3 72.6,71.6 72.6,64.2 80,67.9   "
                  d="M81.946 77.132L74.366 73.342L74.366 65.762L81.946 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,74.9 88,65.6 88,65 87.4,64.7 81.1,73.4   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L89.526 66.274L83.073 75.186Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,74.9 88,65.6 88,65 81.1,74.3   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L83.073 76.108Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,82.9 88,73.6 88,73 87.4,72.7 81.1,81.4   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L89.526 74.469L83.073 83.38Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,82.9 88,73.6 88,73 81.1,82.3   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L83.073 84.302Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,51.6 48,52.2 80,68.2 88,64.2 88,63.6 56,47.6   "
                  d="M49.168 52.855L49.168 53.47L81.946 69.859L90.141 65.762L90.141 65.147L57.362 48.758Z"
                />
                <path
                  opacity={0.29}
                  points="80,68.2 48,52.2 48,51.6 80,67.6   "
                  d="M81.946 69.859L49.168 53.47L49.168 52.855L81.946 69.245Z"
                />
                <path
                  opacity={0.11}
                  points="80,68.2 88,64.2 88,63.6 80,67.6   "
                  d="M81.946 69.859L90.141 65.762L90.141 65.147L81.946 69.245Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,56.2 87.4,63.6 80,67.3 72.6,63.6 72.6,56.2 80,52.5   "
                  d="M89.526 57.567L89.526 65.147L81.946 68.937L74.366 65.147L74.366 57.567L81.946 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="80,67.3 87.4,63.6 87.4,56.2 80,59.9   "
                  d="M81.946 68.937L89.526 65.147L89.526 57.567L81.946 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,53.9 84.6,54.8 77.2,58.5 77.2,62.1 75.4,61.2 75.4,57.6   "
                  d="M84.814 55.211L86.658 56.133L79.078 59.923L79.078 63.611L77.234 62.689L77.234 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="80,67.3 72.6,63.6 72.6,56.2 80,59.9   "
                  d="M81.946 68.937L74.366 65.147L74.366 57.567L81.946 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,67 88,57.7 88,57.1 87.4,56.8 81.1,65.5   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L89.526 58.182L83.073 67.093Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,67 88,57.7 88,57.1 81.1,66.4   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L83.073 68.015Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,43.6 48,44.2 80,60.2 88,56.2 88,55.6 56,39.6   "
                  d="M49.168 44.661L49.168 45.275L81.946 61.665L90.141 57.567L90.141 56.953L57.362 40.563Z"
                />
                <path
                  opacity={0.29}
                  points="80,60.2 48,44.2 48,43.6 80,59.6   "
                  d="M81.946 61.665L49.168 45.275L49.168 44.661L81.946 61.05Z"
                />
                <path
                  opacity={0.11}
                  points="80,60.2 88,56.2 88,55.6 80,59.6   "
                  d="M81.946 61.665L90.141 57.567L90.141 56.953L81.946 61.05Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,48.2 87.4,55.6 80,59.3 72.6,55.6 72.6,48.2 80,44.5   "
                  d="M89.526 49.373L89.526 56.953L81.946 60.743L74.366 56.953L74.366 49.373L81.946 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="80,59.3 87.4,55.6 87.4,48.2 80,51.9   "
                  d="M81.946 60.743L89.526 56.953L89.526 49.373L81.946 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,45.9 84.6,46.8 77.2,50.5 77.2,54.1 75.4,53.2 75.4,49.6   "
                  d="M84.814 47.017L86.658 47.939L79.078 51.729L79.078 55.416L77.234 54.494L77.234 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="80,59.3 72.6,55.6 72.6,48.2 80,51.9   "
                  d="M81.946 60.743L74.366 56.953L74.366 49.373L81.946 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,35.6 48,36.2 80,52.2 88,48.2 88,47.6 56,31.6   "
                  d="M49.168 36.466L49.168 37.081L81.946 53.47L90.141 49.373L90.141 48.758L57.362 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="80,52.2 48,36.2 48,35.6 80,51.6   "
                  d="M81.946 53.47L49.168 37.081L49.168 36.466L81.946 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="80,52.2 88,48.2 88,47.6 80,51.6   "
                  d="M81.946 53.47L90.141 49.373L90.141 48.758L81.946 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,28.2 63.4,35.6 56,39.3 48.6,35.6 48.6,28.2 56,24.5   "
                  d="M64.942 28.886L64.942 36.466L57.362 40.256L49.782 36.466L49.782 28.886L57.362 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="56,39.3 63.4,35.6 63.4,28.2 56,31.9   "
                  d="M57.362 40.256L64.942 36.466L64.942 28.886L57.362 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,25.9 60.6,26.8 53.2,30.5 53.2,34.1 51.4,33.2 51.4,29.6   "
                  d="M60.23 26.53L62.074 27.452L54.494 31.242L54.494 34.93L52.65 34.008L52.65 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="56,39.3 48.6,35.6 48.6,28.2 56,31.9   "
                  d="M57.362 40.256L49.782 36.466L49.782 28.886L57.362 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,32.2 71.4,39.6 64,43.3 56.6,39.6 56.6,32.2 64,28.5   "
                  d="M73.137 32.983L73.137 40.563L65.557 44.353L57.977 40.563L57.977 32.983L65.557 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="64,43.3 71.4,39.6 71.4,32.2 64,35.9   "
                  d="M65.557 44.353L73.137 40.563L73.137 32.983L65.557 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,29.9 68.6,30.8 61.2,34.5 61.2,38.1 59.4,37.2 59.4,33.6   "
                  d="M68.425 30.627L70.269 31.549L62.689 35.339L62.689 39.027L60.845 38.105L60.845 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="64,43.3 56.6,39.6 56.6,32.2 64,35.9   "
                  d="M65.557 44.353L57.977 40.563L57.977 32.983L65.557 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,36.2 79.4,43.6 72,47.3 64.6,43.6 64.6,36.2 72,32.5   "
                  d="M81.332 37.081L81.332 44.661L73.752 48.451L66.172 44.661L66.172 37.081L73.752 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="72,47.3 79.4,43.6 79.4,36.2 72,39.9   "
                  d="M73.752 48.451L81.332 44.661L81.332 37.081L73.752 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,33.9 76.6,34.8 69.2,38.5 69.2,42.1 67.4,41.2 67.4,37.6   "
                  d="M76.62 34.725L78.464 35.647L70.883 39.437L70.883 43.124L69.04 42.202L69.04 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="72,47.3 64.6,43.6 64.6,36.2 72,39.9   "
                  d="M73.752 48.451L66.172 44.661L66.172 37.081L73.752 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,40.2 87.4,47.6 80,51.3 72.6,47.6 72.6,40.2 80,36.5   "
                  d="M89.526 41.178L89.526 48.758L81.946 52.548L74.366 48.758L74.366 41.178L81.946 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="80,51.3 87.4,47.6 87.4,40.2 80,43.9   "
                  d="M81.946 52.548L89.526 48.758L89.526 41.178L81.946 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,37.9 84.6,38.8 77.2,42.5 77.2,46.1 75.4,45.2 75.4,41.6   "
                  d="M84.814 38.822L86.658 39.744L79.078 43.534L79.078 47.222L77.234 46.3L77.234 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="80,51.3 72.6,47.6 72.6,40.2 80,43.9   "
                  d="M81.946 52.548L74.366 48.758L74.366 41.178L81.946 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,50.9 88,41.6 88,41 87.4,40.7 81.1,49.4   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L89.526 41.69L83.073 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,50.9 88,41.6 88,41 81.1,50.3   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L83.073 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,58.9 88,49.6 88,49 87.4,48.7 81.1,57.4   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L89.526 49.885L83.073 58.796Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,58.9 88,49.6 88,49 81.1,58.3   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L83.073 59.718Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,95.6 40,96.2 72,112.2 80,108.2 80,107.6 48,91.6   "
                  d="M40.973 97.926L40.973 98.54L73.752 114.93L81.946 110.832L81.946 110.218L49.168 93.828Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.2 40,96.2 40,95.6 72,111.6   "
                  d="M73.752 114.93L40.973 98.54L40.973 97.926L73.752 114.315Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.2 80,108.2 80,107.6 72,111.6   "
                  d="M73.752 114.93L81.946 110.832L81.946 110.218L73.752 114.315Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,88.2 55.4,95.6 48,99.3 40.6,95.6 40.6,88.2 48,84.5   "
                  d="M56.748 90.346L56.748 97.926L49.168 101.716L41.588 97.926L41.588 90.346L49.168 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="48,99.3 55.4,95.6 55.4,88.2 48,91.9   "
                  d="M49.168 101.716L56.748 97.926L56.748 90.346L49.168 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,85.9 52.6,86.8 45.2,90.5 45.2,94.1 43.4,93.2 43.4,89.6   "
                  d="M52.036 87.99L53.88 88.912L46.3 92.702L46.3 96.389L44.456 95.467L44.456 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="48,99.3 40.6,95.6 40.6,88.2 48,91.9   "
                  d="M49.168 101.716L41.588 97.926L41.588 90.346L49.168 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,92.2 63.4,99.6 56,103.3 48.6,99.6 48.6,92.2 56,88.5   "
                  d="M64.942 94.443L64.942 102.023L57.362 105.813L49.782 102.023L49.782 94.443L57.362 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="56,103.3 63.4,99.6 63.4,92.2 56,95.9   "
                  d="M57.362 105.813L64.942 102.023L64.942 94.443L57.362 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,89.9 60.6,90.8 53.2,94.5 53.2,98.1 51.4,97.2 51.4,93.6   "
                  d="M60.23 92.087L62.074 93.009L54.494 96.799L54.494 100.487L52.65 99.565L52.65 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="56,103.3 48.6,99.6 48.6,92.2 56,95.9   "
                  d="M57.362 105.813L49.782 102.023L49.782 94.443L57.362 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,96.2 71.4,103.6 64,107.3 56.6,103.6 56.6,96.2 64,92.5   "
                  d="M73.137 98.54L73.137 106.12L65.557 109.91L57.977 106.12L57.977 98.54L65.557 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="64,107.3 71.4,103.6 71.4,96.2 64,99.9   "
                  d="M65.557 109.91L73.137 106.12L73.137 98.54L65.557 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,93.9 68.6,94.8 61.2,98.5 61.2,102.1 59.4,101.2 59.4,97.6   "
                  d="M68.425 96.184L70.269 97.106L62.689 100.896L62.689 104.584L60.845 103.662L60.845 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="64,107.3 56.6,103.6 56.6,96.2 64,99.9   "
                  d="M65.557 109.91L57.977 106.12L57.977 98.54L65.557 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,100.2 79.4,107.6 72,111.3 64.6,107.6 64.6,100.2 72,96.5   "
                  d="M81.332 102.638L81.332 110.218L73.752 114.008L66.172 110.218L66.172 102.638L73.752 98.848Z"
                />
                <path
                  opacity={0.11}
                  points="72,111.3 79.4,107.6 79.4,100.2 72,103.9   "
                  d="M73.752 114.008L81.332 110.218L81.332 102.638L73.752 106.428Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,97.9 76.6,98.8 69.2,102.5 69.2,106.1 67.4,105.2 67.4,101.6   "
                  d="M76.62 100.282L78.464 101.204L70.883 104.994L70.883 108.681L69.04 107.759L69.04 104.072Z"
                />
                <path
                  opacity={0.29}
                  points="72,111.3 64.6,107.6 64.6,100.2 72,103.9   "
                  d="M73.752 114.008L66.172 110.218L66.172 102.638L73.752 106.428Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,87.6 40,88.2 72,104.2 80,100.2 80,99.6 48,83.6   "
                  d="M40.973 89.731L40.973 90.346L73.752 106.735L81.946 102.638L81.946 102.023L49.168 85.634Z"
                />
                <path
                  opacity={0.29}
                  points="72,104.2 40,88.2 40,87.6 72,103.6   "
                  d="M73.752 106.735L40.973 90.346L40.973 89.731L73.752 106.12Z"
                />
                <path
                  opacity={0.11}
                  points="72,104.2 80,100.2 80,99.6 72,103.6   "
                  d="M73.752 106.735L81.946 102.638L81.946 102.023L73.752 106.12Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,80.2 55.4,87.6 48,91.3 40.6,87.6 40.6,80.2 48,76.5   "
                  d="M56.748 82.151L56.748 89.731L49.168 93.521L41.588 89.731L41.588 82.151L49.168 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="48,91.3 55.4,87.6 55.4,80.2 48,83.9   "
                  d="M49.168 93.521L56.748 89.731L56.748 82.151L49.168 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,77.9 52.6,78.8 45.2,82.5 45.2,86.1 43.4,85.2 43.4,81.6   "
                  d="M52.036 79.795L53.88 80.717L46.3 84.507L46.3 88.195L44.456 87.273L44.456 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="48,91.3 40.6,87.6 40.6,80.2 48,83.9   "
                  d="M49.168 93.521L41.588 89.731L41.588 82.151L49.168 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,84.2 63.4,91.6 56,95.3 48.6,91.6 48.6,84.2 56,80.5   "
                  d="M64.942 86.248L64.942 93.828L57.362 97.618L49.782 93.828L49.782 86.248L57.362 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="56,95.3 63.4,91.6 63.4,84.2 56,87.9   "
                  d="M57.362 97.618L64.942 93.828L64.942 86.248L57.362 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,81.9 60.6,82.8 53.2,86.5 53.2,90.1 51.4,89.2 51.4,85.6   "
                  d="M60.23 83.892L62.074 84.814L54.494 88.604L54.494 92.292L52.65 91.37L52.65 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="56,95.3 48.6,91.6 48.6,84.2 56,87.9   "
                  d="M57.362 97.618L49.782 93.828L49.782 86.248L57.362 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,88.2 71.4,95.6 64,99.3 56.6,95.6 56.6,88.2 64,84.5   "
                  d="M73.137 90.346L73.137 97.926L65.557 101.716L57.977 97.926L57.977 90.346L65.557 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="64,99.3 71.4,95.6 71.4,88.2 64,91.9   "
                  d="M65.557 101.716L73.137 97.926L73.137 90.346L65.557 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,85.9 68.6,86.8 61.2,90.5 61.2,94.1 59.4,93.2 59.4,89.6   "
                  d="M68.425 87.99L70.269 88.912L62.689 92.702L62.689 96.389L60.845 95.467L60.845 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="64,99.3 56.6,95.6 56.6,88.2 64,91.9   "
                  d="M65.557 101.716L57.977 97.926L57.977 90.346L65.557 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,92.2 79.4,99.6 72,103.3 64.6,99.6 64.6,92.2 72,88.5   "
                  d="M81.332 94.443L81.332 102.023L73.752 105.813L66.172 102.023L66.172 94.443L73.752 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="72,103.3 79.4,99.6 79.4,92.2 72,95.9   "
                  d="M73.752 105.813L81.332 102.023L81.332 94.443L73.752 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,89.9 76.6,90.8 69.2,94.5 69.2,98.1 67.4,97.2 67.4,93.6   "
                  d="M76.62 92.087L78.464 93.009L70.883 96.799L70.883 100.487L69.04 99.565L69.04 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="72,103.3 64.6,99.6 64.6,92.2 72,95.9   "
                  d="M73.752 105.813L66.172 102.023L66.172 94.443L73.752 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,102.9 80,93.6 80,93 79.4,92.7 73.1,101.4   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L81.332 94.955L74.878 103.867Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,102.9 80,93.6 80,93 73.1,102.3   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L74.878 104.789Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,79.6 40,80.2 72,96.2 80,92.2 80,91.6 48,75.6   "
                  d="M40.973 81.536L40.973 82.151L73.752 98.54L81.946 94.443L81.946 93.828L49.168 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="72,96.2 40,80.2 40,79.6 72,95.6   "
                  d="M73.752 98.54L40.973 82.151L40.973 81.536L73.752 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="72,96.2 80,92.2 80,91.6 72,95.6   "
                  d="M73.752 98.54L81.946 94.443L81.946 93.828L73.752 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,110.9 80,101.6 80,101 79.4,100.7 73.1,109.4   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L81.332 103.15L74.878 112.061Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,110.9 80,101.6 80,101 73.1,110.3   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L74.878 112.983Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,72.2 55.4,79.6 48,83.3 40.6,79.6 40.6,72.2 48,68.5   "
                  d="M56.748 73.956L56.748 81.536L49.168 85.327L41.588 81.536L41.588 73.956L49.168 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="48,83.3 55.4,79.6 55.4,72.2 48,75.9   "
                  d="M49.168 85.327L56.748 81.536L56.748 73.956L49.168 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,69.9 52.6,70.8 45.2,74.5 45.2,78.1 43.4,77.2 43.4,73.6   "
                  d="M52.036 71.601L53.88 72.522L46.3 76.312L46.3 80L44.456 79.078L44.456 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="48,83.3 40.6,79.6 40.6,72.2 48,75.9   "
                  d="M49.168 85.327L41.588 81.536L41.588 73.956L49.168 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,76.2 63.4,83.6 56,87.3 48.6,83.6 48.6,76.2 56,72.5   "
                  d="M64.942 78.054L64.942 85.634L57.362 89.424L49.782 85.634L49.782 78.054L57.362 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="56,87.3 63.4,83.6 63.4,76.2 56,79.9   "
                  d="M57.362 89.424L64.942 85.634L64.942 78.054L57.362 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,73.9 60.6,74.8 53.2,78.5 53.2,82.1 51.4,81.2 51.4,77.6   "
                  d="M60.23 75.698L62.074 76.62L54.494 80.41L54.494 84.097L52.65 83.175L52.65 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="56,87.3 48.6,83.6 48.6,76.2 56,79.9   "
                  d="M57.362 89.424L49.782 85.634L49.782 78.054L57.362 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,80.2 71.4,87.6 64,91.3 56.6,87.6 56.6,80.2 64,76.5   "
                  d="M73.137 82.151L73.137 89.731L65.557 93.521L57.977 89.731L57.977 82.151L65.557 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="64,91.3 71.4,87.6 71.4,80.2 64,83.9   "
                  d="M65.557 93.521L73.137 89.731L73.137 82.151L65.557 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,77.9 68.6,78.8 61.2,82.5 61.2,86.1 59.4,85.2 59.4,81.6   "
                  d="M68.425 79.795L70.269 80.717L62.689 84.507L62.689 88.195L60.845 87.273L60.845 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="64,91.3 56.6,87.6 56.6,80.2 64,83.9   "
                  d="M65.557 93.521L57.977 89.731L57.977 82.151L65.557 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,84.2 79.4,91.6 72,95.3 64.6,91.6 64.6,84.2 72,80.5   "
                  d="M81.332 86.248L81.332 93.828L73.752 97.618L66.172 93.828L66.172 86.248L73.752 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="72,95.3 79.4,91.6 79.4,84.2 72,87.9   "
                  d="M73.752 97.618L81.332 93.828L81.332 86.248L73.752 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,81.9 76.6,82.8 69.2,86.5 69.2,90.1 67.4,89.2 67.4,85.6   "
                  d="M76.62 83.892L78.464 84.814L70.883 88.604L70.883 92.292L69.04 91.37L69.04 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="72,95.3 64.6,91.6 64.6,84.2 72,87.9   "
                  d="M73.752 97.618L66.172 93.828L66.172 86.248L73.752 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,95 80,85.7 80,85.1 79.4,84.8 73.1,93.5   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L81.332 86.863L74.878 95.775Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,95 80,85.7 80,85.1 73.1,94.4   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L74.878 96.697Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,71.6 40,72.2 72,88.2 80,84.2 80,83.6 48,67.6   "
                  d="M40.973 73.342L40.973 73.956L73.752 90.346L81.946 86.248L81.946 85.634L49.168 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="72,88.2 40,72.2 40,71.6 72,87.6   "
                  d="M73.752 90.346L40.973 73.956L40.973 73.342L73.752 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="72,88.2 80,84.2 80,83.6 72,87.6   "
                  d="M73.752 90.346L81.946 86.248L81.946 85.634L73.752 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,64.2 55.4,71.6 48,75.3 40.6,71.6 40.6,64.2 48,60.5   "
                  d="M56.748 65.762L56.748 73.342L49.168 77.132L41.588 73.342L41.588 65.762L49.168 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="48,75.3 55.4,71.6 55.4,64.2 48,67.9   "
                  d="M49.168 77.132L56.748 73.342L56.748 65.762L49.168 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,61.9 52.6,62.8 45.2,66.5 45.2,70.1 43.4,69.2 43.4,65.6   "
                  d="M52.036 63.406L53.88 64.328L46.3 68.118L46.3 71.805L44.456 70.883L44.456 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="48,75.3 40.6,71.6 40.6,64.2 48,67.9   "
                  d="M49.168 77.132L41.588 73.342L41.588 65.762L49.168 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,68.2 63.4,75.6 56,79.3 48.6,75.6 48.6,68.2 56,64.5   "
                  d="M64.942 69.859L64.942 77.439L57.362 81.229L49.782 77.439L49.782 69.859L57.362 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="56,79.3 63.4,75.6 63.4,68.2 56,71.9   "
                  d="M57.362 81.229L64.942 77.439L64.942 69.859L57.362 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,65.9 60.6,66.8 53.2,70.5 53.2,74.1 51.4,73.2 51.4,69.6   "
                  d="M60.23 67.503L62.074 68.425L54.494 72.215L54.494 75.903L52.65 74.981L52.65 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="56,79.3 48.6,75.6 48.6,68.2 56,71.9   "
                  d="M57.362 81.229L49.782 77.439L49.782 69.859L57.362 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,72.2 71.4,79.6 64,83.3 56.6,79.6 56.6,72.2 64,68.5   "
                  d="M73.137 73.956L73.137 81.536L65.557 85.327L57.977 81.536L57.977 73.956L65.557 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="64,83.3 71.4,79.6 71.4,72.2 64,75.9   "
                  d="M65.557 85.327L73.137 81.536L73.137 73.956L65.557 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,69.9 68.6,70.8 61.2,74.5 61.2,78.1 59.4,77.2 59.4,73.6   "
                  d="M68.425 71.601L70.269 72.522L62.689 76.312L62.689 80L60.845 79.078L60.845 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="64,83.3 56.6,79.6 56.6,72.2 64,75.9   "
                  d="M65.557 85.327L57.977 81.536L57.977 73.956L65.557 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,76.2 79.4,83.6 72,87.3 64.6,83.6 64.6,76.2 72,72.5   "
                  d="M81.332 78.054L81.332 85.634L73.752 89.424L66.172 85.634L66.172 78.054L73.752 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="72,87.3 79.4,83.6 79.4,76.2 72,79.9   "
                  d="M73.752 89.424L81.332 85.634L81.332 78.054L73.752 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,73.9 76.6,74.8 69.2,78.5 69.2,82.1 67.4,81.2 67.4,77.6   "
                  d="M76.62 75.698L78.464 76.62L70.883 80.41L70.883 84.097L69.04 83.175L69.04 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="72,87.3 64.6,83.6 64.6,76.2 72,79.9   "
                  d="M73.752 89.424L66.172 85.634L66.172 78.054L73.752 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,63.6 40,64.2 72,80.2 80,76.2 80,75.6 48,59.6   "
                  d="M40.973 65.147L40.973 65.762L73.752 82.151L81.946 78.054L81.946 77.439L49.168 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="72,80.2 40,64.2 40,63.6 72,79.6   "
                  d="M73.752 82.151L40.973 65.762L40.973 65.147L73.752 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="72,80.2 80,76.2 80,75.6 72,79.6   "
                  d="M73.752 82.151L81.946 78.054L81.946 77.439L73.752 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,56.2 55.4,63.6 48,67.3 40.6,63.6 40.6,56.2 48,52.5   "
                  d="M56.748 57.567L56.748 65.147L49.168 68.937L41.588 65.147L41.588 57.567L49.168 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="48,67.3 55.4,63.6 55.4,56.2 48,59.9   "
                  d="M49.168 68.937L56.748 65.147L56.748 57.567L49.168 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,53.9 52.6,54.8 45.2,58.5 45.2,62.1 43.4,61.2 43.4,57.6   "
                  d="M52.036 55.211L53.88 56.133L46.3 59.923L46.3 63.611L44.456 62.689L44.456 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="48,67.3 40.6,63.6 40.6,56.2 48,59.9   "
                  d="M49.168 68.937L41.588 65.147L41.588 57.567L49.168 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,60.2 63.4,67.6 56,71.3 48.6,67.6 48.6,60.2 56,56.5   "
                  d="M64.942 61.665L64.942 69.245L57.362 73.035L49.782 69.245L49.782 61.665L57.362 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="56,71.3 63.4,67.6 63.4,60.2 56,63.9   "
                  d="M57.362 73.035L64.942 69.245L64.942 61.665L57.362 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,57.9 60.6,58.8 53.2,62.5 53.2,66.1 51.4,65.2 51.4,61.6   "
                  d="M60.23 59.309L62.074 60.23L54.494 64.02L54.494 67.708L52.65 66.786L52.65 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="56,71.3 48.6,67.6 48.6,60.2 56,63.9   "
                  d="M57.362 73.035L49.782 69.245L49.782 61.665L57.362 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,64.2 71.4,71.6 64,75.3 56.6,71.6 56.6,64.2 64,60.5   "
                  d="M73.137 65.762L73.137 73.342L65.557 77.132L57.977 73.342L57.977 65.762L65.557 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="64,75.3 71.4,71.6 71.4,64.2 64,67.9   "
                  d="M65.557 77.132L73.137 73.342L73.137 65.762L65.557 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,61.9 68.6,62.8 61.2,66.5 61.2,70.1 59.4,69.2 59.4,65.6   "
                  d="M68.425 63.406L70.269 64.328L62.689 68.118L62.689 71.805L60.845 70.883L60.845 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="64,75.3 56.6,71.6 56.6,64.2 64,67.9   "
                  d="M65.557 77.132L57.977 73.342L57.977 65.762L65.557 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,68.2 79.4,75.6 72,79.3 64.6,75.6 64.6,68.2 72,64.5   "
                  d="M81.332 69.859L81.332 77.439L73.752 81.229L66.172 77.439L66.172 69.859L73.752 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="72,79.3 79.4,75.6 79.4,68.2 72,71.9   "
                  d="M73.752 81.229L81.332 77.439L81.332 69.859L73.752 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,65.9 76.6,66.8 69.2,70.5 69.2,74.1 67.4,73.2 67.4,69.6   "
                  d="M76.62 67.503L78.464 68.425L70.883 72.215L70.883 75.903L69.04 74.981L69.04 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="72,79.3 64.6,75.6 64.6,68.2 72,71.9   "
                  d="M73.752 81.229L66.172 77.439L66.172 69.859L73.752 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,78.9 80,69.6 80,69 79.4,68.7 73.1,77.4   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L81.332 70.371L74.878 79.283Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,78.9 80,69.6 80,69 73.1,78.3   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L74.878 80.205Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,86.9 80,77.6 80,77 79.4,76.7 73.1,85.4   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L81.332 78.566L74.878 87.478Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,86.9 80,77.6 80,77 73.1,86.3   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L74.878 88.399Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,55.6 40,56.2 72,72.2 80,68.2 80,67.6 48,51.6   "
                  d="M40.973 56.953L40.973 57.567L73.752 73.956L81.946 69.859L81.946 69.245L49.168 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="72,72.2 40,56.2 40,55.6 72,71.6   "
                  d="M73.752 73.956L40.973 57.567L40.973 56.953L73.752 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="72,72.2 80,68.2 80,67.6 72,71.6   "
                  d="M73.752 73.956L81.946 69.859L81.946 69.245L73.752 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,48.2 55.4,55.6 48,59.3 40.6,55.6 40.6,48.2 48,44.5   "
                  d="M56.748 49.373L56.748 56.953L49.168 60.743L41.588 56.953L41.588 49.373L49.168 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="48,59.3 55.4,55.6 55.4,48.2 48,51.9   "
                  d="M49.168 60.743L56.748 56.953L56.748 49.373L49.168 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,45.9 52.6,46.8 45.2,50.5 45.2,54.1 43.4,53.2 43.4,49.6   "
                  d="M52.036 47.017L53.88 47.939L46.3 51.729L46.3 55.416L44.456 54.494L44.456 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="48,59.3 40.6,55.6 40.6,48.2 48,51.9   "
                  d="M49.168 60.743L41.588 56.953L41.588 49.373L49.168 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,52.2 63.4,59.6 56,63.3 48.6,59.6 48.6,52.2 56,48.5   "
                  d="M64.942 53.47L64.942 61.05L57.362 64.84L49.782 61.05L49.782 53.47L57.362 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="56,63.3 63.4,59.6 63.4,52.2 56,55.9   "
                  d="M57.362 64.84L64.942 61.05L64.942 53.47L57.362 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,49.9 60.6,50.8 53.2,54.5 53.2,58.1 51.4,57.2 51.4,53.6   "
                  d="M60.23 51.114L62.074 52.036L54.494 55.826L54.494 59.513L52.65 58.592L52.65 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="56,63.3 48.6,59.6 48.6,52.2 56,55.9   "
                  d="M57.362 64.84L49.782 61.05L49.782 53.47L57.362 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,56.2 71.4,63.6 64,67.3 56.6,63.6 56.6,56.2 64,52.5   "
                  d="M73.137 57.567L73.137 65.147L65.557 68.937L57.977 65.147L57.977 57.567L65.557 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="64,67.3 71.4,63.6 71.4,56.2 64,59.9   "
                  d="M65.557 68.937L73.137 65.147L73.137 57.567L65.557 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,53.9 68.6,54.8 61.2,58.5 61.2,62.1 59.4,61.2 59.4,57.6   "
                  d="M68.425 55.211L70.269 56.133L62.689 59.923L62.689 63.611L60.845 62.689L60.845 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="64,67.3 56.6,63.6 56.6,56.2 64,59.9   "
                  d="M65.557 68.937L57.977 65.147L57.977 57.567L65.557 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,60.2 79.4,67.6 72,71.3 64.6,67.6 64.6,60.2 72,56.5   "
                  d="M81.332 61.665L81.332 69.245L73.752 73.035L66.172 69.245L66.172 61.665L73.752 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="72,71.3 79.4,67.6 79.4,60.2 72,63.9   "
                  d="M73.752 73.035L81.332 69.245L81.332 61.665L73.752 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,57.9 76.6,58.8 69.2,62.5 69.2,66.1 67.4,65.2 67.4,61.6   "
                  d="M76.62 59.309L78.464 60.23L70.883 64.02L70.883 67.708L69.04 66.786L69.04 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="72,71.3 64.6,67.6 64.6,60.2 72,63.9   "
                  d="M73.752 73.035L66.172 69.245L66.172 61.665L73.752 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,71 80,61.7 80,61.1 79.4,60.8 73.1,69.5   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L81.332 62.279L74.878 71.191Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,71 80,61.7 80,61.1 73.1,70.4   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L74.878 72.113Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,47.6 40,48.2 72,64.2 80,60.2 80,59.6 48,43.6   "
                  d="M40.973 48.758L40.973 49.373L73.752 65.762L81.946 61.665L81.946 61.05L49.168 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="72,64.2 40,48.2 40,47.6 72,63.6   "
                  d="M73.752 65.762L40.973 49.373L40.973 48.758L73.752 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="72,64.2 80,60.2 80,59.6 72,63.6   "
                  d="M73.752 65.762L81.946 61.665L81.946 61.05L73.752 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,44.2 63.4,51.6 56,55.3 48.6,51.6 48.6,44.2 56,40.5   "
                  d="M64.942 45.275L64.942 52.855L57.362 56.645L49.782 52.855L49.782 45.275L57.362 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="56,55.3 63.4,51.6 63.4,44.2 56,47.9   "
                  d="M57.362 56.645L64.942 52.855L64.942 45.275L57.362 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,41.9 60.6,42.8 53.2,46.5 53.2,50.1 51.4,49.2 51.4,45.6   "
                  d="M60.23 42.919L62.074 43.841L54.494 47.631L54.494 51.319L52.65 50.397L52.65 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="56,55.3 48.6,51.6 48.6,44.2 56,47.9   "
                  d="M57.362 56.645L49.782 52.855L49.782 45.275L57.362 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,48.2 71.4,55.6 64,59.3 56.6,55.6 56.6,48.2 64,44.5   "
                  d="M73.137 49.373L73.137 56.953L65.557 60.743L57.977 56.953L57.977 49.373L65.557 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="64,59.3 71.4,55.6 71.4,48.2 64,51.9   "
                  d="M65.557 60.743L73.137 56.953L73.137 49.373L65.557 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,45.9 68.6,46.8 61.2,50.5 61.2,54.1 59.4,53.2 59.4,49.6   "
                  d="M68.425 47.017L70.269 47.939L62.689 51.729L62.689 55.416L60.845 54.494L60.845 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="64,59.3 56.6,55.6 56.6,48.2 64,51.9   "
                  d="M65.557 60.743L57.977 56.953L57.977 49.373L65.557 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,52.2 79.4,59.6 72,63.3 64.6,59.6 64.6,52.2 72,48.5   "
                  d="M81.332 53.47L81.332 61.05L73.752 64.84L66.172 61.05L66.172 53.47L73.752 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="72,63.3 79.4,59.6 79.4,52.2 72,55.9   "
                  d="M73.752 64.84L81.332 61.05L81.332 53.47L73.752 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,49.9 76.6,50.8 69.2,54.5 69.2,58.1 67.4,57.2 67.4,53.6   "
                  d="M76.62 51.114L78.464 52.036L70.883 55.826L70.883 59.513L69.04 58.592L69.04 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="72,63.3 64.6,59.6 64.6,52.2 72,55.9   "
                  d="M73.752 64.84L66.172 61.05L66.172 53.47L73.752 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,39.6 40,40.2 72,56.2 80,52.2 80,51.6 48,35.6   "
                  d="M40.973 40.563L40.973 41.178L73.752 57.567L81.946 53.47L81.946 52.855L49.168 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="72,56.2 40,40.2 40,39.6 72,55.6   "
                  d="M73.752 57.567L40.973 41.178L40.973 40.563L73.752 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="72,56.2 80,52.2 80,51.6 72,55.6   "
                  d="M73.752 57.567L81.946 53.47L81.946 52.855L73.752 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,36.2 63.4,43.6 56,47.3 48.6,43.6 48.6,36.2 56,32.5   "
                  d="M64.942 37.081L64.942 44.661L57.362 48.451L49.782 44.661L49.782 37.081L57.362 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="56,47.3 63.4,43.6 63.4,36.2 56,39.9   "
                  d="M57.362 48.451L64.942 44.661L64.942 37.081L57.362 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,33.9 60.6,34.8 53.2,38.5 53.2,42.1 51.4,41.2 51.4,37.6   "
                  d="M60.23 34.725L62.074 35.647L54.494 39.437L54.494 43.124L52.65 42.202L52.65 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="56,47.3 48.6,43.6 48.6,36.2 56,39.9   "
                  d="M57.362 48.451L49.782 44.661L49.782 37.081L57.362 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,40.2 71.4,47.6 64,51.3 56.6,47.6 56.6,40.2 64,36.5   "
                  d="M73.137 41.178L73.137 48.758L65.557 52.548L57.977 48.758L57.977 41.178L65.557 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="64,51.3 71.4,47.6 71.4,40.2 64,43.9   "
                  d="M65.557 52.548L73.137 48.758L73.137 41.178L65.557 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,37.9 68.6,38.8 61.2,42.5 61.2,46.1 59.4,45.2 59.4,41.6   "
                  d="M68.425 38.822L70.269 39.744L62.689 43.534L62.689 47.222L60.845 46.3L60.845 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="64,51.3 56.6,47.6 56.6,40.2 64,43.9   "
                  d="M65.557 52.548L57.977 48.758L57.977 41.178L65.557 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,44.2 79.4,51.6 72,55.3 64.6,51.6 64.6,44.2 72,40.5   "
                  d="M81.332 45.275L81.332 52.855L73.752 56.645L66.172 52.855L66.172 45.275L73.752 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="72,55.3 79.4,51.6 79.4,44.2 72,47.9   "
                  d="M73.752 56.645L81.332 52.855L81.332 45.275L73.752 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,41.9 76.6,42.8 69.2,46.5 69.2,50.1 67.4,49.2 67.4,45.6   "
                  d="M76.62 42.919L78.464 43.841L70.883 47.631L70.883 51.319L69.04 50.397L69.04 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="72,55.3 64.6,51.6 64.6,44.2 72,47.9   "
                  d="M73.752 56.645L66.172 52.855L66.172 45.275L73.752 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,54.9 80,45.6 80,45 79.4,44.7 73.1,53.4   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L81.332 45.787L74.878 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,54.9 80,45.6 80,45 73.1,54.3   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L74.878 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,62.9 80,53.6 80,53 79.4,52.7 73.1,61.4   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L81.332 53.982L74.878 62.894Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,62.9 80,53.6 80,53 73.1,62.3   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L74.878 63.816Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="70.8,48 70.8,112 72,112.6 73.2,112 73.2,48 72,47.4   "
                  d="M72.522 49.168L72.522 114.725L73.752 115.339L74.981 114.725L74.981 49.168L73.752 48.553Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.6 70.8,112 70.8,48 72,48.6   "
                  d="M73.752 115.339L72.522 114.725L72.522 49.168L73.752 49.782Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.6 73.2,112 73.2,48 72,48.6   "
                  d="M73.752 115.339L74.981 114.725L74.981 49.168L73.752 49.782Z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="group-4" className="lvl-1" transform={selectedGroup === 4 ? 'translate(50%,50%)':'matrix(-1 0 0 1 736 256)'} onClick={() => handleClick(4)}>
          <g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="22.8,8 22.8,72 24,72.6 25.2,72 25.2,8 24,7.4   "
                  d="M23.355 8.195L23.355 73.752L24.584 74.366L25.813 73.752L25.813 8.195L24.584 7.58Z"
                />
                <path
                  opacity={0.29}
                  points="24,72.6 22.8,72 22.8,8 24,8.6   "
                  d="M24.584 74.366L23.355 73.752L23.355 8.195L24.584 8.809Z"
                />
                <path
                  opacity={0.11}
                  points="24,72.6 25.2,72 25.2,8 24,8.6   "
                  d="M24.584 74.366L25.813 73.752L25.813 8.195L24.584 8.809Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="54.8,24 54.8,88 56,88.6 57.2,88 57.2,24 56,23.4   "
                  d="M56.133 24.584L56.133 90.141L57.362 90.755L58.592 90.141L58.592 24.584L57.362 23.969Z"
                />
                <path
                  opacity={0.29}
                  points="56,88.6 54.8,88 54.8,24 56,24.6   "
                  d="M57.362 90.755L56.133 90.141L56.133 24.584L57.362 25.198Z"
                />
                <path
                  opacity={0.11}
                  points="56,88.6 57.2,88 57.2,24 56,24.6   "
                  d="M57.362 90.755L58.592 90.141L58.592 24.584L57.362 25.198Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,12.2 31.4,19.6 24,23.3 16.6,19.6 16.6,12.2 24,8.5   "
                  d="M32.164 12.497L32.164 20.077L24.584 23.867L17.004 20.077L17.004 12.497L24.584 8.707Z"
                />
                <path
                  opacity={0.11}
                  points="24,23.3 31.4,19.6 31.4,12.2 24,15.9   "
                  d="M24.584 23.867L32.164 20.077L32.164 12.497L24.584 16.287Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,9.9 28.6,10.8 21.2,14.5 21.2,18.1 19.4,17.2 19.4,13.6   "
                  d="M27.452 10.141L29.296 11.063L21.716 14.853L21.716 18.54L19.872 17.618L19.872 13.931Z"
                />
                <path
                  opacity={0.29}
                  points="24,23.3 16.6,19.6 16.6,12.2 24,15.9   "
                  d="M24.584 23.867L17.004 20.077L17.004 12.497L24.584 16.287Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,16.2 39.4,23.6 32,27.3 24.6,23.6 24.6,16.2 32,12.5   "
                  d="M40.359 16.594L40.359 24.174L32.778 27.964L25.198 24.174L25.198 16.594L32.778 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="32,27.3 39.4,23.6 39.4,16.2 32,19.9   "
                  d="M32.778 27.964L40.359 24.174L40.359 16.594L32.778 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,13.9 36.6,14.8 29.2,18.5 29.2,22.1 27.4,21.2 27.4,17.6   "
                  d="M35.647 14.238L37.49 15.16L29.91 18.95L29.91 22.638L28.067 21.716L28.067 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="32,27.3 24.6,23.6 24.6,16.2 32,19.9   "
                  d="M32.778 27.964L25.198 24.174L25.198 16.594L32.778 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,20.2 47.4,27.6 40,31.3 32.6,27.6 32.6,20.2 40,16.5   "
                  d="M48.553 20.691L48.553 28.271L40.973 32.061L33.393 28.271L33.393 20.691L40.973 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="40,31.3 47.4,27.6 47.4,20.2 40,23.9   "
                  d="M40.973 32.061L48.553 28.271L48.553 20.691L40.973 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,17.9 44.6,18.8 37.2,22.5 37.2,26.1 35.4,25.2 35.4,21.6   "
                  d="M43.841 18.335L45.685 19.257L38.105 23.047L38.105 26.735L36.261 25.813L36.261 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="40,31.3 32.6,27.6 32.6,20.2 40,23.9   "
                  d="M40.973 32.061L33.393 28.271L33.393 20.691L40.973 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,24.2 55.4,31.6 48,35.3 40.6,31.6 40.6,24.2 48,20.5   "
                  d="M56.748 24.789L56.748 32.369L49.168 36.159L41.588 32.369L41.588 24.789L49.168 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="48,35.3 55.4,31.6 55.4,24.2 48,27.9   "
                  d="M49.168 36.159L56.748 32.369L56.748 24.789L49.168 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,21.9 52.6,22.8 45.2,26.5 45.2,30.1 43.4,29.2 43.4,25.6   "
                  d="M52.036 22.433L53.88 23.355L46.3 27.145L46.3 30.832L44.456 29.91L44.456 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="48,35.3 40.6,31.6 40.6,24.2 48,27.9   "
                  d="M49.168 36.159L41.588 32.369L41.588 24.789L49.168 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="14.8,12 14.8,76 16,76.6 17.2,76 17.2,12 16,11.4   "
                  d="M15.16 12.292L15.16 77.849L16.389 78.464L17.618 77.849L17.618 12.292L16.389 11.677Z"
                />
                <path
                  opacity={0.29}
                  points="16,76.6 14.8,76 14.8,12 16,12.6   "
                  d="M16.389 78.464L15.16 77.849L15.16 12.292L16.389 12.907Z"
                />
                <path
                  opacity={0.11}
                  points="16,76.6 17.2,76 17.2,12 16,12.6   "
                  d="M16.389 78.464L17.618 77.849L17.618 12.292L16.389 12.907Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="46.8,28 46.8,92 48,92.6 49.2,92 49.2,28 48,27.4   "
                  d="M47.939 28.681L47.939 94.238L49.168 94.853L50.397 94.238L50.397 28.681L49.168 28.067Z"
                />
                <path
                  opacity={0.29}
                  points="48,92.6 46.8,92 46.8,28 48,28.6   "
                  d="M49.168 94.853L47.939 94.238L47.939 28.681L49.168 29.296Z"
                />
                <path
                  opacity={0.11}
                  points="48,92.6 49.2,92 49.2,28 48,28.6   "
                  d="M49.168 94.853L50.397 94.238L50.397 28.681L49.168 29.296Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="6.8,16 6.8,80 8,80.6 9.2,80 9.2,16 8,15.4   "
                  d="M6.965 16.389L6.965 81.946L8.195 82.561L9.424 81.946L9.424 16.389L8.195 15.775Z"
                />
                <path
                  opacity={0.29}
                  points="8,80.6 6.8,80 6.8,16 8,16.6   "
                  d="M8.195 82.561L6.965 81.946L6.965 16.389L8.195 17.004Z"
                />
                <path
                  opacity={0.11}
                  points="8,80.6 9.2,80 9.2,16 8,16.6   "
                  d="M8.195 82.561L9.424 81.946L9.424 16.389L8.195 17.004Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,79.6 8,80.2 40,96.2 48,92.2 48,91.6 16,75.6   "
                  d="M8.195 81.536L8.195 82.151L40.973 98.54L49.168 94.443L49.168 93.828L16.389 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.2 8,80.2 8,79.6 40,95.6   "
                  d="M40.973 98.54L8.195 82.151L8.195 81.536L40.973 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.2 48,92.2 48,91.6 40,95.6   "
                  d="M40.973 98.54L49.168 94.443L49.168 93.828L40.973 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,72.2 23.4,79.6 16,83.3 8.6,79.6 8.6,72.2 16,68.5   "
                  d="M23.969 73.956L23.969 81.536L16.389 85.327L8.809 81.536L8.809 73.956L16.389 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="16,83.3 23.4,79.6 23.4,72.2 16,75.9   "
                  d="M16.389 85.327L23.969 81.536L23.969 73.956L16.389 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,69.9 20.6,70.8 13.2,74.5 13.2,78.1 11.4,77.2 11.4,73.6   "
                  d="M19.257 71.601L21.101 72.522L13.521 76.312L13.521 80L11.677 79.078L11.677 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="16,83.3 8.6,79.6 8.6,72.2 16,75.9   "
                  d="M16.389 85.327L8.809 81.536L8.809 73.956L16.389 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,76.2 31.4,83.6 24,87.3 16.6,83.6 16.6,76.2 24,72.5   "
                  d="M32.164 78.054L32.164 85.634L24.584 89.424L17.004 85.634L17.004 78.054L24.584 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="24,87.3 31.4,83.6 31.4,76.2 24,79.9   "
                  d="M24.584 89.424L32.164 85.634L32.164 78.054L24.584 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,73.9 28.6,74.8 21.2,78.5 21.2,82.1 19.4,81.2 19.4,77.6   "
                  d="M27.452 75.698L29.296 76.62L21.716 80.41L21.716 84.097L19.872 83.175L19.872 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="24,87.3 16.6,83.6 16.6,76.2 24,79.9   "
                  d="M24.584 89.424L17.004 85.634L17.004 78.054L24.584 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,80.2 39.4,87.6 32,91.3 24.6,87.6 24.6,80.2 32,76.5   "
                  d="M40.359 82.151L40.359 89.731L32.778 93.521L25.198 89.731L25.198 82.151L32.778 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="32,91.3 39.4,87.6 39.4,80.2 32,83.9   "
                  d="M32.778 93.521L40.359 89.731L40.359 82.151L32.778 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,77.9 36.6,78.8 29.2,82.5 29.2,86.1 27.4,85.2 27.4,81.6   "
                  d="M35.647 79.795L37.49 80.717L29.91 84.507L29.91 88.195L28.067 87.273L28.067 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="32,91.3 24.6,87.6 24.6,80.2 32,83.9   "
                  d="M32.778 93.521L25.198 89.731L25.198 82.151L32.778 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,84.2 47.4,91.6 40,95.3 32.6,91.6 32.6,84.2 40,80.5   "
                  d="M48.553 86.248L48.553 93.828L40.973 97.618L33.393 93.828L33.393 86.248L40.973 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="40,95.3 47.4,91.6 47.4,84.2 40,87.9   "
                  d="M40.973 97.618L48.553 93.828L48.553 86.248L40.973 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,81.9 44.6,82.8 37.2,86.5 37.2,90.1 35.4,89.2 35.4,85.6   "
                  d="M43.841 83.892L45.685 84.814L38.105 88.604L38.105 92.292L36.261 91.37L36.261 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="40,95.3 32.6,91.6 32.6,84.2 40,87.9   "
                  d="M40.973 97.618L33.393 93.828L33.393 86.248L40.973 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,71.6 8,72.2 40,88.2 48,84.2 48,83.6 16,67.6   "
                  d="M8.195 73.342L8.195 73.956L40.973 90.346L49.168 86.248L49.168 85.634L16.389 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="40,88.2 8,72.2 8,71.6 40,87.6   "
                  d="M40.973 90.346L8.195 73.956L8.195 73.342L40.973 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="40,88.2 48,84.2 48,83.6 40,87.6   "
                  d="M40.973 90.346L49.168 86.248L49.168 85.634L40.973 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,64.2 23.4,71.6 16,75.3 8.6,71.6 8.6,64.2 16,60.5   "
                  d="M23.969 65.762L23.969 73.342L16.389 77.132L8.809 73.342L8.809 65.762L16.389 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="16,75.3 23.4,71.6 23.4,64.2 16,67.9   "
                  d="M16.389 77.132L23.969 73.342L23.969 65.762L16.389 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,61.9 20.6,62.8 13.2,66.5 13.2,70.1 11.4,69.2 11.4,65.6   "
                  d="M19.257 63.406L21.101 64.328L13.521 68.118L13.521 71.805L11.677 70.883L11.677 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="16,75.3 8.6,71.6 8.6,64.2 16,67.9   "
                  d="M16.389 77.132L8.809 73.342L8.809 65.762L16.389 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,68.2 31.4,75.6 24,79.3 16.6,75.6 16.6,68.2 24,64.5   "
                  d="M32.164 69.859L32.164 77.439L24.584 81.229L17.004 77.439L17.004 69.859L24.584 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="24,79.3 31.4,75.6 31.4,68.2 24,71.9   "
                  d="M24.584 81.229L32.164 77.439L32.164 69.859L24.584 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,65.9 28.6,66.8 21.2,70.5 21.2,74.1 19.4,73.2 19.4,69.6   "
                  d="M27.452 67.503L29.296 68.425L21.716 72.215L21.716 75.903L19.872 74.981L19.872 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="24,79.3 16.6,75.6 16.6,68.2 24,71.9   "
                  d="M24.584 81.229L17.004 77.439L17.004 69.859L24.584 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,72.2 39.4,79.6 32,83.3 24.6,79.6 24.6,72.2 32,68.5   "
                  d="M40.359 73.956L40.359 81.536L32.778 85.327L25.198 81.536L25.198 73.956L32.778 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="32,83.3 39.4,79.6 39.4,72.2 32,75.9   "
                  d="M32.778 85.327L40.359 81.536L40.359 73.956L32.778 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,69.9 36.6,70.8 29.2,74.5 29.2,78.1 27.4,77.2 27.4,73.6   "
                  d="M35.647 71.601L37.49 72.522L29.91 76.312L29.91 80L28.067 79.078L28.067 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="32,83.3 24.6,79.6 24.6,72.2 32,75.9   "
                  d="M32.778 85.327L25.198 81.536L25.198 73.956L32.778 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,76.2 47.4,83.6 40,87.3 32.6,83.6 32.6,76.2 40,72.5   "
                  d="M48.553 78.054L48.553 85.634L40.973 89.424L33.393 85.634L33.393 78.054L40.973 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="40,87.3 47.4,83.6 47.4,76.2 40,79.9   "
                  d="M40.973 89.424L48.553 85.634L48.553 78.054L40.973 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,73.9 44.6,74.8 37.2,78.5 37.2,82.1 35.4,81.2 35.4,77.6   "
                  d="M43.841 75.698L45.685 76.62L38.105 80.41L38.105 84.097L36.261 83.175L36.261 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="40,87.3 32.6,83.6 32.6,76.2 40,79.9   "
                  d="M40.973 89.424L33.393 85.634L33.393 78.054L40.973 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,63.6 8,64.2 40,80.2 48,76.2 48,75.6 16,59.6   "
                  d="M8.195 65.147L8.195 65.762L40.973 82.151L49.168 78.054L49.168 77.439L16.389 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="40,80.2 8,64.2 8,63.6 40,79.6   "
                  d="M40.973 82.151L8.195 65.762L8.195 65.147L40.973 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="40,80.2 48,76.2 48,75.6 40,79.6   "
                  d="M40.973 82.151L49.168 78.054L49.168 77.439L40.973 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,56.2 23.4,63.6 16,67.3 8.6,63.6 8.6,56.2 16,52.5   "
                  d="M23.969 57.567L23.969 65.147L16.389 68.937L8.809 65.147L8.809 57.567L16.389 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="16,67.3 23.4,63.6 23.4,56.2 16,59.9   "
                  d="M16.389 68.937L23.969 65.147L23.969 57.567L16.389 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,53.9 20.6,54.8 13.2,58.5 13.2,62.1 11.4,61.2 11.4,57.6   "
                  d="M19.257 55.211L21.101 56.133L13.521 59.923L13.521 63.611L11.677 62.689L11.677 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="16,67.3 8.6,63.6 8.6,56.2 16,59.9   "
                  d="M16.389 68.937L8.809 65.147L8.809 57.567L16.389 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,60.2 31.4,67.6 24,71.3 16.6,67.6 16.6,60.2 24,56.5   "
                  d="M32.164 61.665L32.164 69.245L24.584 73.035L17.004 69.245L17.004 61.665L24.584 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="24,71.3 31.4,67.6 31.4,60.2 24,63.9   "
                  d="M24.584 73.035L32.164 69.245L32.164 61.665L24.584 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,57.9 28.6,58.8 21.2,62.5 21.2,66.1 19.4,65.2 19.4,61.6   "
                  d="M27.452 59.309L29.296 60.23L21.716 64.02L21.716 67.708L19.872 66.786L19.872 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="24,71.3 16.6,67.6 16.6,60.2 24,63.9   "
                  d="M24.584 73.035L17.004 69.245L17.004 61.665L24.584 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,64.2 39.4,71.6 32,75.3 24.6,71.6 24.6,64.2 32,60.5   "
                  d="M40.359 65.762L40.359 73.342L32.778 77.132L25.198 73.342L25.198 65.762L32.778 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="32,75.3 39.4,71.6 39.4,64.2 32,67.9   "
                  d="M32.778 77.132L40.359 73.342L40.359 65.762L32.778 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,61.9 36.6,62.8 29.2,66.5 29.2,70.1 27.4,69.2 27.4,65.6   "
                  d="M35.647 63.406L37.49 64.328L29.91 68.118L29.91 71.805L28.067 70.883L28.067 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="32,75.3 24.6,71.6 24.6,64.2 32,67.9   "
                  d="M32.778 77.132L25.198 73.342L25.198 65.762L32.778 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,68.2 47.4,75.6 40,79.3 32.6,75.6 32.6,68.2 40,64.5   "
                  d="M48.553 69.859L48.553 77.439L40.973 81.229L33.393 77.439L33.393 69.859L40.973 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="40,79.3 47.4,75.6 47.4,68.2 40,71.9   "
                  d="M40.973 81.229L48.553 77.439L48.553 69.859L40.973 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,65.9 44.6,66.8 37.2,70.5 37.2,74.1 35.4,73.2 35.4,69.6   "
                  d="M43.841 67.503L45.685 68.425L38.105 72.215L38.105 75.903L36.261 74.981L36.261 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="40,79.3 32.6,75.6 32.6,68.2 40,71.9   "
                  d="M40.973 81.229L33.393 77.439L33.393 69.859L40.973 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,55.6 8,56.2 40,72.2 48,68.2 48,67.6 16,51.6   "
                  d="M8.195 56.953L8.195 57.567L40.973 73.956L49.168 69.859L49.168 69.245L16.389 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="40,72.2 8,56.2 8,55.6 40,71.6   "
                  d="M40.973 73.956L8.195 57.567L8.195 56.953L40.973 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="40,72.2 48,68.2 48,67.6 40,71.6   "
                  d="M40.973 73.956L49.168 69.859L49.168 69.245L40.973 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,48.2 23.4,55.6 16,59.3 8.6,55.6 8.6,48.2 16,44.5   "
                  d="M23.969 49.373L23.969 56.953L16.389 60.743L8.809 56.953L8.809 49.373L16.389 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="16,59.3 23.4,55.6 23.4,48.2 16,51.9   "
                  d="M16.389 60.743L23.969 56.953L23.969 49.373L16.389 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,45.9 20.6,46.8 13.2,50.5 13.2,54.1 11.4,53.2 11.4,49.6   "
                  d="M19.257 47.017L21.101 47.939L13.521 51.729L13.521 55.416L11.677 54.494L11.677 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="16,59.3 8.6,55.6 8.6,48.2 16,51.9   "
                  d="M16.389 60.743L8.809 56.953L8.809 49.373L16.389 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,52.2 31.4,59.6 24,63.3 16.6,59.6 16.6,52.2 24,48.5   "
                  d="M32.164 53.47L32.164 61.05L24.584 64.84L17.004 61.05L17.004 53.47L24.584 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="24,63.3 31.4,59.6 31.4,52.2 24,55.9   "
                  d="M24.584 64.84L32.164 61.05L32.164 53.47L24.584 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,49.9 28.6,50.8 21.2,54.5 21.2,58.1 19.4,57.2 19.4,53.6   "
                  d="M27.452 51.114L29.296 52.036L21.716 55.826L21.716 59.513L19.872 58.592L19.872 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="24,63.3 16.6,59.6 16.6,52.2 24,55.9   "
                  d="M24.584 64.84L17.004 61.05L17.004 53.47L24.584 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,56.2 39.4,63.6 32,67.3 24.6,63.6 24.6,56.2 32,52.5   "
                  d="M40.359 57.567L40.359 65.147L32.778 68.937L25.198 65.147L25.198 57.567L32.778 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="32,67.3 39.4,63.6 39.4,56.2 32,59.9   "
                  d="M32.778 68.937L40.359 65.147L40.359 57.567L32.778 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,53.9 36.6,54.8 29.2,58.5 29.2,62.1 27.4,61.2 27.4,57.6   "
                  d="M35.647 55.211L37.49 56.133L29.91 59.923L29.91 63.611L28.067 62.689L28.067 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="32,67.3 24.6,63.6 24.6,56.2 32,59.9   "
                  d="M32.778 68.937L25.198 65.147L25.198 57.567L32.778 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,60.2 47.4,67.6 40,71.3 32.6,67.6 32.6,60.2 40,56.5   "
                  d="M48.553 61.665L48.553 69.245L40.973 73.035L33.393 69.245L33.393 61.665L40.973 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="40,71.3 47.4,67.6 47.4,60.2 40,63.9   "
                  d="M40.973 73.035L48.553 69.245L48.553 61.665L40.973 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,57.9 44.6,58.8 37.2,62.5 37.2,66.1 35.4,65.2 35.4,61.6   "
                  d="M43.841 59.309L45.685 60.23L38.105 64.02L38.105 67.708L36.261 66.786L36.261 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="40,71.3 32.6,67.6 32.6,60.2 40,63.9   "
                  d="M40.973 73.035L33.393 69.245L33.393 61.665L40.973 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,47.6 8,48.2 40,64.2 48,60.2 48,59.6 16,43.6   "
                  d="M8.195 48.758L8.195 49.373L40.973 65.762L49.168 61.665L49.168 61.05L16.389 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="40,64.2 8,48.2 8,47.6 40,63.6   "
                  d="M40.973 65.762L8.195 49.373L8.195 48.758L40.973 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="40,64.2 48,60.2 48,59.6 40,63.6   "
                  d="M40.973 65.762L49.168 61.665L49.168 61.05L40.973 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,40.2 23.4,47.6 16,51.3 8.6,47.6 8.6,40.2 16,36.5   "
                  d="M23.969 41.178L23.969 48.758L16.389 52.548L8.809 48.758L8.809 41.178L16.389 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="16,51.3 23.4,47.6 23.4,40.2 16,43.9   "
                  d="M16.389 52.548L23.969 48.758L23.969 41.178L16.389 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,37.9 20.6,38.8 13.2,42.5 13.2,46.1 11.4,45.2 11.4,41.6   "
                  d="M19.257 38.822L21.101 39.744L13.521 43.534L13.521 47.222L11.677 46.3L11.677 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="16,51.3 8.6,47.6 8.6,40.2 16,43.9   "
                  d="M16.389 52.548L8.809 48.758L8.809 41.178L16.389 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,44.2 31.4,51.6 24,55.3 16.6,51.6 16.6,44.2 24,40.5   "
                  d="M32.164 45.275L32.164 52.855L24.584 56.645L17.004 52.855L17.004 45.275L24.584 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="24,55.3 31.4,51.6 31.4,44.2 24,47.9   "
                  d="M24.584 56.645L32.164 52.855L32.164 45.275L24.584 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,41.9 28.6,42.8 21.2,46.5 21.2,50.1 19.4,49.2 19.4,45.6   "
                  d="M27.452 42.919L29.296 43.841L21.716 47.631L21.716 51.319L19.872 50.397L19.872 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="24,55.3 16.6,51.6 16.6,44.2 24,47.9   "
                  d="M24.584 56.645L17.004 52.855L17.004 45.275L24.584 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,48.2 39.4,55.6 32,59.3 24.6,55.6 24.6,48.2 32,44.5   "
                  d="M40.359 49.373L40.359 56.953L32.778 60.743L25.198 56.953L25.198 49.373L32.778 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="32,59.3 39.4,55.6 39.4,48.2 32,51.9   "
                  d="M32.778 60.743L40.359 56.953L40.359 49.373L32.778 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,45.9 36.6,46.8 29.2,50.5 29.2,54.1 27.4,53.2 27.4,49.6   "
                  d="M35.647 47.017L37.49 47.939L29.91 51.729L29.91 55.416L28.067 54.494L28.067 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="32,59.3 24.6,55.6 24.6,48.2 32,51.9   "
                  d="M32.778 60.743L25.198 56.953L25.198 49.373L32.778 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,52.2 47.4,59.6 40,63.3 32.6,59.6 32.6,52.2 40,48.5   "
                  d="M48.553 53.47L48.553 61.05L40.973 64.84L33.393 61.05L33.393 53.47L40.973 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="40,63.3 47.4,59.6 47.4,52.2 40,55.9   "
                  d="M40.973 64.84L48.553 61.05L48.553 53.47L40.973 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,49.9 44.6,50.8 37.2,54.5 37.2,58.1 35.4,57.2 35.4,53.6   "
                  d="M43.841 51.114L45.685 52.036L38.105 55.826L38.105 59.513L36.261 58.592L36.261 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="40,63.3 32.6,59.6 32.6,52.2 40,55.9   "
                  d="M40.973 64.84L33.393 61.05L33.393 53.47L40.973 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,39.6 8,40.2 40,56.2 48,52.2 48,51.6 16,35.6   "
                  d="M8.195 40.563L8.195 41.178L40.973 57.567L49.168 53.47L49.168 52.855L16.389 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="40,56.2 8,40.2 8,39.6 40,55.6   "
                  d="M40.973 57.567L8.195 41.178L8.195 40.563L40.973 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="40,56.2 48,52.2 48,51.6 40,55.6   "
                  d="M40.973 57.567L49.168 53.47L49.168 52.855L40.973 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,32.2 23.4,39.6 16,43.3 8.6,39.6 8.6,32.2 16,28.5   "
                  d="M23.969 32.983L23.969 40.563L16.389 44.353L8.809 40.563L8.809 32.983L16.389 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="16,43.3 23.4,39.6 23.4,32.2 16,35.9   "
                  d="M16.389 44.353L23.969 40.563L23.969 32.983L16.389 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,29.9 20.6,30.8 13.2,34.5 13.2,38.1 11.4,37.2 11.4,33.6   "
                  d="M19.257 30.627L21.101 31.549L13.521 35.339L13.521 39.027L11.677 38.105L11.677 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="16,43.3 8.6,39.6 8.6,32.2 16,35.9   "
                  d="M16.389 44.353L8.809 40.563L8.809 32.983L16.389 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,36.2 31.4,43.6 24,47.3 16.6,43.6 16.6,36.2 24,32.5   "
                  d="M32.164 37.081L32.164 44.661L24.584 48.451L17.004 44.661L17.004 37.081L24.584 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="24,47.3 31.4,43.6 31.4,36.2 24,39.9   "
                  d="M24.584 48.451L32.164 44.661L32.164 37.081L24.584 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,33.9 28.6,34.8 21.2,38.5 21.2,42.1 19.4,41.2 19.4,37.6   "
                  d="M27.452 34.725L29.296 35.647L21.716 39.437L21.716 43.124L19.872 42.202L19.872 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="24,47.3 16.6,43.6 16.6,36.2 24,39.9   "
                  d="M24.584 48.451L17.004 44.661L17.004 37.081L24.584 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,40.2 39.4,47.6 32,51.3 24.6,47.6 24.6,40.2 32,36.5   "
                  d="M40.359 41.178L40.359 48.758L32.778 52.548L25.198 48.758L25.198 41.178L32.778 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="32,51.3 39.4,47.6 39.4,40.2 32,43.9   "
                  d="M32.778 52.548L40.359 48.758L40.359 41.178L32.778 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,37.9 36.6,38.8 29.2,42.5 29.2,46.1 27.4,45.2 27.4,41.6   "
                  d="M35.647 38.822L37.49 39.744L29.91 43.534L29.91 47.222L28.067 46.3L28.067 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="32,51.3 24.6,47.6 24.6,40.2 32,43.9   "
                  d="M32.778 52.548L25.198 48.758L25.198 41.178L32.778 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,44.2 47.4,51.6 40,55.3 32.6,51.6 32.6,44.2 40,40.5   "
                  d="M48.553 45.275L48.553 52.855L40.973 56.645L33.393 52.855L33.393 45.275L40.973 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="40,55.3 47.4,51.6 47.4,44.2 40,47.9   "
                  d="M40.973 56.645L48.553 52.855L48.553 45.275L40.973 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,41.9 44.6,42.8 37.2,46.5 37.2,50.1 35.4,49.2 35.4,45.6   "
                  d="M43.841 42.919L45.685 43.841L38.105 47.631L38.105 51.319L36.261 50.397L36.261 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="40,55.3 32.6,51.6 32.6,44.2 40,47.9   "
                  d="M40.973 56.645L33.393 52.855L33.393 45.275L40.973 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,31.6 8,32.2 40,48.2 48,44.2 48,43.6 16,27.6   "
                  d="M8.195 32.369L8.195 32.983L40.973 49.373L49.168 45.275L49.168 44.661L16.389 28.271Z"
                />
                <path
                  opacity={0.29}
                  points="40,48.2 8,32.2 8,31.6 40,47.6   "
                  d="M40.973 49.373L8.195 32.983L8.195 32.369L40.973 48.758Z"
                />
                <path
                  opacity={0.11}
                  points="40,48.2 48,44.2 48,43.6 40,47.6   "
                  d="M40.973 49.373L49.168 45.275L49.168 44.661L40.973 48.758Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,24.2 23.4,31.6 16,35.3 8.6,31.6 8.6,24.2 16,20.5   "
                  d="M23.969 24.789L23.969 32.369L16.389 36.159L8.809 32.369L8.809 24.789L16.389 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="16,35.3 23.4,31.6 23.4,24.2 16,27.9   "
                  d="M16.389 36.159L23.969 32.369L23.969 24.789L16.389 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,21.9 20.6,22.8 13.2,26.5 13.2,30.1 11.4,29.2 11.4,25.6   "
                  d="M19.257 22.433L21.101 23.355L13.521 27.145L13.521 30.832L11.677 29.91L11.677 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="16,35.3 8.6,31.6 8.6,24.2 16,27.9   "
                  d="M16.389 36.159L8.809 32.369L8.809 24.789L16.389 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,28.2 31.4,35.6 24,39.3 16.6,35.6 16.6,28.2 24,24.5   "
                  d="M32.164 28.886L32.164 36.466L24.584 40.256L17.004 36.466L17.004 28.886L24.584 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="24,39.3 31.4,35.6 31.4,28.2 24,31.9   "
                  d="M24.584 40.256L32.164 36.466L32.164 28.886L24.584 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,25.9 28.6,26.8 21.2,30.5 21.2,34.1 19.4,33.2 19.4,29.6   "
                  d="M27.452 26.53L29.296 27.452L21.716 31.242L21.716 34.93L19.872 34.008L19.872 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="24,39.3 16.6,35.6 16.6,28.2 24,31.9   "
                  d="M24.584 40.256L17.004 36.466L17.004 28.886L24.584 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,32.2 39.4,39.6 32,43.3 24.6,39.6 24.6,32.2 32,28.5   "
                  d="M40.359 32.983L40.359 40.563L32.778 44.353L25.198 40.563L25.198 32.983L32.778 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="32,43.3 39.4,39.6 39.4,32.2 32,35.9   "
                  d="M32.778 44.353L40.359 40.563L40.359 32.983L32.778 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,29.9 36.6,30.8 29.2,34.5 29.2,38.1 27.4,37.2 27.4,33.6   "
                  d="M35.647 30.627L37.49 31.549L29.91 35.339L29.91 39.027L28.067 38.105L28.067 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="32,43.3 24.6,39.6 24.6,32.2 32,35.9   "
                  d="M32.778 44.353L25.198 40.563L25.198 32.983L32.778 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,36.2 47.4,43.6 40,47.3 32.6,43.6 32.6,36.2 40,32.5   "
                  d="M48.553 37.081L48.553 44.661L40.973 48.451L33.393 44.661L33.393 37.081L40.973 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="40,47.3 47.4,43.6 47.4,36.2 40,39.9   "
                  d="M40.973 48.451L48.553 44.661L48.553 37.081L40.973 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,33.9 44.6,34.8 37.2,38.5 37.2,42.1 35.4,41.2 35.4,37.6   "
                  d="M43.841 34.725L45.685 35.647L38.105 39.437L38.105 43.124L36.261 42.202L36.261 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="40,47.3 32.6,43.6 32.6,36.2 40,39.9   "
                  d="M40.973 48.451L33.393 44.661L33.393 37.081L40.973 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="8,23.6 8,24.2 40,40.2 48,36.2 48,35.6 16,19.6   "
                  d="M8.195 24.174L8.195 24.789L40.973 41.178L49.168 37.081L49.168 36.466L16.389 20.077Z"
                />
                <path
                  opacity={0.29}
                  points="40,40.2 8,24.2 8,23.6 40,39.6   "
                  d="M40.973 41.178L8.195 24.789L8.195 24.174L40.973 40.563Z"
                />
                <path
                  opacity={0.11}
                  points="40,40.2 48,36.2 48,35.6 40,39.6   "
                  d="M40.973 41.178L49.168 37.081L49.168 36.466L40.973 40.563Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="23.4,16.2 23.4,23.6 16,27.3 8.6,23.6 8.6,16.2 16,12.5   "
                  d="M23.969 16.594L23.969 24.174L16.389 27.964L8.809 24.174L8.809 16.594L16.389 12.804Z"
                />
                <path
                  opacity={0.11}
                  points="16,27.3 23.4,23.6 23.4,16.2 16,19.9   "
                  d="M16.389 27.964L23.969 24.174L23.969 16.594L16.389 20.384Z"
                />
                <path
                  opacity={0.3}
                  points="18.8,13.9 20.6,14.8 13.2,18.5 13.2,22.1 11.4,21.2 11.4,17.6   "
                  d="M19.257 14.238L21.101 15.16L13.521 18.95L13.521 22.638L11.677 21.716L11.677 18.028Z"
                />
                <path
                  opacity={0.29}
                  points="16,27.3 8.6,23.6 8.6,16.2 16,19.9   "
                  d="M16.389 27.964L8.809 24.174L8.809 16.594L16.389 20.384Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="31.4,20.2 31.4,27.6 24,31.3 16.6,27.6 16.6,20.2 24,16.5   "
                  d="M32.164 20.691L32.164 28.271L24.584 32.061L17.004 28.271L17.004 20.691L24.584 16.901Z"
                />
                <path
                  opacity={0.11}
                  points="24,31.3 31.4,27.6 31.4,20.2 24,23.9   "
                  d="M24.584 32.061L32.164 28.271L32.164 20.691L24.584 24.481Z"
                />
                <path
                  opacity={0.3}
                  points="26.8,17.9 28.6,18.8 21.2,22.5 21.2,26.1 19.4,25.2 19.4,21.6   "
                  d="M27.452 18.335L29.296 19.257L21.716 23.047L21.716 26.735L19.872 25.813L19.872 22.125Z"
                />
                <path
                  opacity={0.29}
                  points="24,31.3 16.6,27.6 16.6,20.2 24,23.9   "
                  d="M24.584 32.061L17.004 28.271L17.004 20.691L24.584 24.481Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="39.4,24.2 39.4,31.6 32,35.3 24.6,31.6 24.6,24.2 32,20.5   "
                  d="M40.359 24.789L40.359 32.369L32.778 36.159L25.198 32.369L25.198 24.789L32.778 20.999Z"
                />
                <path
                  opacity={0.11}
                  points="32,35.3 39.4,31.6 39.4,24.2 32,27.9   "
                  d="M32.778 36.159L40.359 32.369L40.359 24.789L32.778 28.579Z"
                />
                <path
                  opacity={0.3}
                  points="34.8,21.9 36.6,22.8 29.2,26.5 29.2,30.1 27.4,29.2 27.4,25.6   "
                  d="M35.647 22.433L37.49 23.355L29.91 27.145L29.91 30.832L28.067 29.91L28.067 26.223Z"
                />
                <path
                  opacity={0.29}
                  points="32,35.3 24.6,31.6 24.6,24.2 32,27.9   "
                  d="M32.778 36.159L25.198 32.369L25.198 24.789L32.778 28.579Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="47.4,28.2 47.4,35.6 40,39.3 32.6,35.6 32.6,28.2 40,24.5   "
                  d="M48.553 28.886L48.553 36.466L40.973 40.256L33.393 36.466L33.393 28.886L40.973 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="40,39.3 47.4,35.6 47.4,28.2 40,31.9   "
                  d="M40.973 40.256L48.553 36.466L48.553 28.886L40.973 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="42.8,25.9 44.6,26.8 37.2,30.5 37.2,34.1 35.4,33.2 35.4,29.6   "
                  d="M43.841 26.53L45.685 27.452L38.105 31.242L38.105 34.93L36.261 34.008L36.261 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="40,39.3 32.6,35.6 32.6,28.2 40,31.9   "
                  d="M40.973 40.256L33.393 36.466L33.393 28.886L40.973 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="38.8,32 38.8,96 40,96.6 41.2,96 41.2,32 40,31.4   "
                  d="M39.744 32.778L39.744 98.335L40.973 98.95L42.202 98.335L42.202 32.778L40.973 32.164Z"
                />
                <path
                  opacity={0.29}
                  points="40,96.6 38.8,96 38.8,32 40,32.6   "
                  d="M40.973 98.95L39.744 98.335L39.744 32.778L40.973 33.393Z"
                />
                <path
                  opacity={0.11}
                  points="40,96.6 41.2,96 41.2,32 40,32.6   "
                  d="M40.973 98.95L42.202 98.335L42.202 32.778L40.973 33.393Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="86.8,40 86.8,104 88,104.6 89.2,104 89.2,40 88,39.4   "
                  d="M88.912 40.973L88.912 106.53L90.141 107.145L91.37 106.53L91.37 40.973L90.141 40.359Z"
                />
                <path
                  opacity={0.29}
                  points="88,104.6 86.8,104 86.8,40 88,40.6   "
                  d="M90.141 107.145L88.912 106.53L88.912 40.973L90.141 41.588Z"
                />
                <path
                  opacity={0.11}
                  points="88,104.6 89.2,104 89.2,40 88,40.6   "
                  d="M90.141 107.145L91.37 106.53L91.37 40.973L90.141 41.588Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,91.6 48,92.2 80,108.2 88,104.2 88,103.6 56,87.6   "
                  d="M49.168 93.828L49.168 94.443L81.946 110.832L90.141 106.735L90.141 106.12L57.362 89.731Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.2 48,92.2 48,91.6 80,107.6   "
                  d="M81.946 110.832L49.168 94.443L49.168 93.828L81.946 110.218Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.2 88,104.2 88,103.6 80,107.6   "
                  d="M81.946 110.832L90.141 106.735L90.141 106.12L81.946 110.218Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,96.2 87.4,103.6 80,107.3 72.6,103.6 72.6,96.2 80,92.5   "
                  d="M89.526 98.54L89.526 106.12L81.946 109.91L74.366 106.12L74.366 98.54L81.946 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="80,107.3 87.4,103.6 87.4,96.2 80,99.9   "
                  d="M81.946 109.91L89.526 106.12L89.526 98.54L81.946 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,93.9 84.6,94.8 77.2,98.5 77.2,102.1 75.4,101.2 75.4,97.6   "
                  d="M84.814 96.184L86.658 97.106L79.078 100.896L79.078 104.584L77.234 103.662L77.234 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="80,107.3 72.6,103.6 72.6,96.2 80,99.9   "
                  d="M81.946 109.91L74.366 106.12L74.366 98.54L81.946 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,83.6 48,84.2 80,100.2 88,96.2 88,95.6 56,79.6   "
                  d="M49.168 85.634L49.168 86.248L81.946 102.638L90.141 98.54L90.141 97.926L57.362 81.536Z"
                />
                <path
                  opacity={0.29}
                  points="80,100.2 48,84.2 48,83.6 80,99.6   "
                  d="M81.946 102.638L49.168 86.248L49.168 85.634L81.946 102.023Z"
                />
                <path
                  opacity={0.11}
                  points="80,100.2 88,96.2 88,95.6 80,99.6   "
                  d="M81.946 102.638L90.141 98.54L90.141 97.926L81.946 102.023Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,88.2 87.4,95.6 80,99.3 72.6,95.6 72.6,88.2 80,84.5   "
                  d="M89.526 90.346L89.526 97.926L81.946 101.716L74.366 97.926L74.366 90.346L81.946 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="80,99.3 87.4,95.6 87.4,88.2 80,91.9   "
                  d="M81.946 101.716L89.526 97.926L89.526 90.346L81.946 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,85.9 84.6,86.8 77.2,90.5 77.2,94.1 75.4,93.2 75.4,89.6   "
                  d="M84.814 87.99L86.658 88.912L79.078 92.702L79.078 96.389L77.234 95.467L77.234 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="80,99.3 72.6,95.6 72.6,88.2 80,91.9   "
                  d="M81.946 101.716L74.366 97.926L74.366 90.346L81.946 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,98.9 88,89.6 88,89 87.4,88.7 81.1,97.4   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L89.526 90.858L83.073 99.77Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,98.9 88,89.6 88,89 81.1,98.3   "
                  d="M83.073 101.306L90.141 91.78L90.141 91.165L83.073 100.691Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,106.9 88,97.6 88,97 87.4,96.7 81.1,105.4   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L89.526 99.052L83.073 107.964Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,106.9 88,97.6 88,97 81.1,106.3   "
                  d="M83.073 109.501L90.141 99.974L90.141 99.36L83.073 108.886Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,75.6 48,76.2 80,92.2 88,88.2 88,87.6 56,71.6   "
                  d="M49.168 77.439L49.168 78.054L81.946 94.443L90.141 90.346L90.141 89.731L57.362 73.342Z"
                />
                <path
                  opacity={0.29}
                  points="80,92.2 48,76.2 48,75.6 80,91.6   "
                  d="M81.946 94.443L49.168 78.054L49.168 77.439L81.946 93.828Z"
                />
                <path
                  opacity={0.11}
                  points="80,92.2 88,88.2 88,87.6 80,91.6   "
                  d="M81.946 94.443L90.141 90.346L90.141 89.731L81.946 93.828Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,80.2 87.4,87.6 80,91.3 72.6,87.6 72.6,80.2 80,76.5   "
                  d="M89.526 82.151L89.526 89.731L81.946 93.521L74.366 89.731L74.366 82.151L81.946 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="80,91.3 87.4,87.6 87.4,80.2 80,83.9   "
                  d="M81.946 93.521L89.526 89.731L89.526 82.151L81.946 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,77.9 84.6,78.8 77.2,82.5 77.2,86.1 75.4,85.2 75.4,81.6   "
                  d="M84.814 79.795L86.658 80.717L79.078 84.507L79.078 88.195L77.234 87.273L77.234 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="80,91.3 72.6,87.6 72.6,80.2 80,83.9   "
                  d="M81.946 93.521L74.366 89.731L74.366 82.151L81.946 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,91 88,81.7 88,81.1 87.4,80.8 81.1,89.5   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L89.526 82.766L83.073 91.677Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,91 88,81.7 88,81.1 81.1,90.4   "
                  d="M83.073 93.214L90.141 83.688L90.141 83.073L83.073 92.599Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,67.6 48,68.2 80,84.2 88,80.2 88,79.6 56,63.6   "
                  d="M49.168 69.245L49.168 69.859L81.946 86.248L90.141 82.151L90.141 81.536L57.362 65.147Z"
                />
                <path
                  opacity={0.29}
                  points="80,84.2 48,68.2 48,67.6 80,83.6   "
                  d="M81.946 86.248L49.168 69.859L49.168 69.245L81.946 85.634Z"
                />
                <path
                  opacity={0.11}
                  points="80,84.2 88,80.2 88,79.6 80,83.6   "
                  d="M81.946 86.248L90.141 82.151L90.141 81.536L81.946 85.634Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,72.2 87.4,79.6 80,83.3 72.6,79.6 72.6,72.2 80,68.5   "
                  d="M89.526 73.956L89.526 81.536L81.946 85.327L74.366 81.536L74.366 73.956L81.946 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="80,83.3 87.4,79.6 87.4,72.2 80,75.9   "
                  d="M81.946 85.327L89.526 81.536L89.526 73.956L81.946 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,69.9 84.6,70.8 77.2,74.5 77.2,78.1 75.4,77.2 75.4,73.6   "
                  d="M84.814 71.601L86.658 72.522L79.078 76.312L79.078 80L77.234 79.078L77.234 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="80,83.3 72.6,79.6 72.6,72.2 80,75.9   "
                  d="M81.946 85.327L74.366 81.536L74.366 73.956L81.946 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,59.6 48,60.2 80,76.2 88,72.2 88,71.6 56,55.6   "
                  d="M49.168 61.05L49.168 61.665L81.946 78.054L90.141 73.956L90.141 73.342L57.362 56.953Z"
                />
                <path
                  opacity={0.29}
                  points="80,76.2 48,60.2 48,59.6 80,75.6   "
                  d="M81.946 78.054L49.168 61.665L49.168 61.05L81.946 77.439Z"
                />
                <path
                  opacity={0.11}
                  points="80,76.2 88,72.2 88,71.6 80,75.6   "
                  d="M81.946 78.054L90.141 73.956L90.141 73.342L81.946 77.439Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,64.2 87.4,71.6 80,75.3 72.6,71.6 72.6,64.2 80,60.5   "
                  d="M89.526 65.762L89.526 73.342L81.946 77.132L74.366 73.342L74.366 65.762L81.946 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="80,75.3 87.4,71.6 87.4,64.2 80,67.9   "
                  d="M81.946 77.132L89.526 73.342L89.526 65.762L81.946 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,61.9 84.6,62.8 77.2,66.5 77.2,70.1 75.4,69.2 75.4,65.6   "
                  d="M84.814 63.406L86.658 64.328L79.078 68.118L79.078 71.805L77.234 70.883L77.234 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="80,75.3 72.6,71.6 72.6,64.2 80,67.9   "
                  d="M81.946 77.132L74.366 73.342L74.366 65.762L81.946 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,74.9 88,65.6 88,65 87.4,64.7 81.1,73.4   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L89.526 66.274L83.073 75.186Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,74.9 88,65.6 88,65 81.1,74.3   "
                  d="M83.073 76.722L90.141 67.196L90.141 66.581L83.073 76.108Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,82.9 88,73.6 88,73 87.4,72.7 81.1,81.4   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L89.526 74.469L83.073 83.38Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,82.9 88,73.6 88,73 81.1,82.3   "
                  d="M83.073 84.917L90.141 75.391L90.141 74.776L83.073 84.302Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,51.6 48,52.2 80,68.2 88,64.2 88,63.6 56,47.6   "
                  d="M49.168 52.855L49.168 53.47L81.946 69.859L90.141 65.762L90.141 65.147L57.362 48.758Z"
                />
                <path
                  opacity={0.29}
                  points="80,68.2 48,52.2 48,51.6 80,67.6   "
                  d="M81.946 69.859L49.168 53.47L49.168 52.855L81.946 69.245Z"
                />
                <path
                  opacity={0.11}
                  points="80,68.2 88,64.2 88,63.6 80,67.6   "
                  d="M81.946 69.859L90.141 65.762L90.141 65.147L81.946 69.245Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,56.2 87.4,63.6 80,67.3 72.6,63.6 72.6,56.2 80,52.5   "
                  d="M89.526 57.567L89.526 65.147L81.946 68.937L74.366 65.147L74.366 57.567L81.946 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="80,67.3 87.4,63.6 87.4,56.2 80,59.9   "
                  d="M81.946 68.937L89.526 65.147L89.526 57.567L81.946 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,53.9 84.6,54.8 77.2,58.5 77.2,62.1 75.4,61.2 75.4,57.6   "
                  d="M84.814 55.211L86.658 56.133L79.078 59.923L79.078 63.611L77.234 62.689L77.234 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="80,67.3 72.6,63.6 72.6,56.2 80,59.9   "
                  d="M81.946 68.937L74.366 65.147L74.366 57.567L81.946 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,67 88,57.7 88,57.1 87.4,56.8 81.1,65.5   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L89.526 58.182L83.073 67.093Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,67 88,57.7 88,57.1 81.1,66.4   "
                  d="M83.073 68.63L90.141 59.104L90.141 58.489L83.073 68.015Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,43.6 48,44.2 80,60.2 88,56.2 88,55.6 56,39.6   "
                  d="M49.168 44.661L49.168 45.275L81.946 61.665L90.141 57.567L90.141 56.953L57.362 40.563Z"
                />
                <path
                  opacity={0.29}
                  points="80,60.2 48,44.2 48,43.6 80,59.6   "
                  d="M81.946 61.665L49.168 45.275L49.168 44.661L81.946 61.05Z"
                />
                <path
                  opacity={0.11}
                  points="80,60.2 88,56.2 88,55.6 80,59.6   "
                  d="M81.946 61.665L90.141 57.567L90.141 56.953L81.946 61.05Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,48.2 87.4,55.6 80,59.3 72.6,55.6 72.6,48.2 80,44.5   "
                  d="M89.526 49.373L89.526 56.953L81.946 60.743L74.366 56.953L74.366 49.373L81.946 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="80,59.3 87.4,55.6 87.4,48.2 80,51.9   "
                  d="M81.946 60.743L89.526 56.953L89.526 49.373L81.946 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,45.9 84.6,46.8 77.2,50.5 77.2,54.1 75.4,53.2 75.4,49.6   "
                  d="M84.814 47.017L86.658 47.939L79.078 51.729L79.078 55.416L77.234 54.494L77.234 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="80,59.3 72.6,55.6 72.6,48.2 80,51.9   "
                  d="M81.946 60.743L74.366 56.953L74.366 49.373L81.946 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="48,35.6 48,36.2 80,52.2 88,48.2 88,47.6 56,31.6   "
                  d="M49.168 36.466L49.168 37.081L81.946 53.47L90.141 49.373L90.141 48.758L57.362 32.369Z"
                />
                <path
                  opacity={0.29}
                  points="80,52.2 48,36.2 48,35.6 80,51.6   "
                  d="M81.946 53.47L49.168 37.081L49.168 36.466L81.946 52.855Z"
                />
                <path
                  opacity={0.11}
                  points="80,52.2 88,48.2 88,47.6 80,51.6   "
                  d="M81.946 53.47L90.141 49.373L90.141 48.758L81.946 52.855Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,28.2 63.4,35.6 56,39.3 48.6,35.6 48.6,28.2 56,24.5   "
                  d="M64.942 28.886L64.942 36.466L57.362 40.256L49.782 36.466L49.782 28.886L57.362 25.096Z"
                />
                <path
                  opacity={0.11}
                  points="56,39.3 63.4,35.6 63.4,28.2 56,31.9   "
                  d="M57.362 40.256L64.942 36.466L64.942 28.886L57.362 32.676Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,25.9 60.6,26.8 53.2,30.5 53.2,34.1 51.4,33.2 51.4,29.6   "
                  d="M60.23 26.53L62.074 27.452L54.494 31.242L54.494 34.93L52.65 34.008L52.65 30.32Z"
                />
                <path
                  opacity={0.29}
                  points="56,39.3 48.6,35.6 48.6,28.2 56,31.9   "
                  d="M57.362 40.256L49.782 36.466L49.782 28.886L57.362 32.676Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,32.2 71.4,39.6 64,43.3 56.6,39.6 56.6,32.2 64,28.5   "
                  d="M73.137 32.983L73.137 40.563L65.557 44.353L57.977 40.563L57.977 32.983L65.557 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="64,43.3 71.4,39.6 71.4,32.2 64,35.9   "
                  d="M65.557 44.353L73.137 40.563L73.137 32.983L65.557 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,29.9 68.6,30.8 61.2,34.5 61.2,38.1 59.4,37.2 59.4,33.6   "
                  d="M68.425 30.627L70.269 31.549L62.689 35.339L62.689 39.027L60.845 38.105L60.845 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="64,43.3 56.6,39.6 56.6,32.2 64,35.9   "
                  d="M65.557 44.353L57.977 40.563L57.977 32.983L65.557 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,36.2 79.4,43.6 72,47.3 64.6,43.6 64.6,36.2 72,32.5   "
                  d="M81.332 37.081L81.332 44.661L73.752 48.451L66.172 44.661L66.172 37.081L73.752 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="72,47.3 79.4,43.6 79.4,36.2 72,39.9   "
                  d="M73.752 48.451L81.332 44.661L81.332 37.081L73.752 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,33.9 76.6,34.8 69.2,38.5 69.2,42.1 67.4,41.2 67.4,37.6   "
                  d="M76.62 34.725L78.464 35.647L70.883 39.437L70.883 43.124L69.04 42.202L69.04 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="72,47.3 64.6,43.6 64.6,36.2 72,39.9   "
                  d="M73.752 48.451L66.172 44.661L66.172 37.081L73.752 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="87.4,40.2 87.4,47.6 80,51.3 72.6,47.6 72.6,40.2 80,36.5   "
                  d="M89.526 41.178L89.526 48.758L81.946 52.548L74.366 48.758L74.366 41.178L81.946 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="80,51.3 87.4,47.6 87.4,40.2 80,43.9   "
                  d="M81.946 52.548L89.526 48.758L89.526 41.178L81.946 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="82.8,37.9 84.6,38.8 77.2,42.5 77.2,46.1 75.4,45.2 75.4,41.6   "
                  d="M84.814 38.822L86.658 39.744L79.078 43.534L79.078 47.222L77.234 46.3L77.234 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="80,51.3 72.6,47.6 72.6,40.2 80,43.9   "
                  d="M81.946 52.548L74.366 48.758L74.366 41.178L81.946 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,50.9 88,41.6 88,41 87.4,40.7 81.1,49.4   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L89.526 41.69L83.073 50.602Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,50.9 88,41.6 88,41 81.1,50.3   "
                  d="M83.073 52.138L90.141 42.612L90.141 41.997L83.073 51.524Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="81.1,58.9 88,49.6 88,49 87.4,48.7 81.1,57.4   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L89.526 49.885L83.073 58.796Z"
                />
                <path
                  opacity={0.11}
                  points="81.1,58.9 88,49.6 88,49 81.1,58.3   "
                  d="M83.073 60.333L90.141 50.807L90.141 50.192L83.073 59.718Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#3366CC"
                  points="78.8,44 78.8,108 80,108.6 81.2,108 81.2,44 80,43.4   "
                  d="M80.717 45.07L80.717 110.627L81.946 111.242L83.175 110.627L83.175 45.07L81.946 44.456Z"
                />
                <path
                  opacity={0.29}
                  points="80,108.6 78.8,108 78.8,44 80,44.6   "
                  d="M81.946 111.242L80.717 110.627L80.717 45.07L81.946 45.685Z"
                />
                <path
                  opacity={0.11}
                  points="80,108.6 81.2,108 81.2,44 80,44.6   "
                  d="M81.946 111.242L83.175 110.627L83.175 45.07L81.946 45.685Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,95.6 40,96.2 72,112.2 80,108.2 80,107.6 48,91.6   "
                  d="M40.973 97.926L40.973 98.54L73.752 114.93L81.946 110.832L81.946 110.218L49.168 93.828Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.2 40,96.2 40,95.6 72,111.6   "
                  d="M73.752 114.93L40.973 98.54L40.973 97.926L73.752 114.315Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.2 80,108.2 80,107.6 72,111.6   "
                  d="M73.752 114.93L81.946 110.832L81.946 110.218L73.752 114.315Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,88.2 55.4,95.6 48,99.3 40.6,95.6 40.6,88.2 48,84.5   "
                  d="M56.748 90.346L56.748 97.926L49.168 101.716L41.588 97.926L41.588 90.346L49.168 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="48,99.3 55.4,95.6 55.4,88.2 48,91.9   "
                  d="M49.168 101.716L56.748 97.926L56.748 90.346L49.168 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,85.9 52.6,86.8 45.2,90.5 45.2,94.1 43.4,93.2 43.4,89.6   "
                  d="M52.036 87.99L53.88 88.912L46.3 92.702L46.3 96.389L44.456 95.467L44.456 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="48,99.3 40.6,95.6 40.6,88.2 48,91.9   "
                  d="M49.168 101.716L41.588 97.926L41.588 90.346L49.168 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,92.2 63.4,99.6 56,103.3 48.6,99.6 48.6,92.2 56,88.5   "
                  d="M64.942 94.443L64.942 102.023L57.362 105.813L49.782 102.023L49.782 94.443L57.362 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="56,103.3 63.4,99.6 63.4,92.2 56,95.9   "
                  d="M57.362 105.813L64.942 102.023L64.942 94.443L57.362 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,89.9 60.6,90.8 53.2,94.5 53.2,98.1 51.4,97.2 51.4,93.6   "
                  d="M60.23 92.087L62.074 93.009L54.494 96.799L54.494 100.487L52.65 99.565L52.65 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="56,103.3 48.6,99.6 48.6,92.2 56,95.9   "
                  d="M57.362 105.813L49.782 102.023L49.782 94.443L57.362 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,96.2 71.4,103.6 64,107.3 56.6,103.6 56.6,96.2 64,92.5   "
                  d="M73.137 98.54L73.137 106.12L65.557 109.91L57.977 106.12L57.977 98.54L65.557 94.75Z"
                />
                <path
                  opacity={0.11}
                  points="64,107.3 71.4,103.6 71.4,96.2 64,99.9   "
                  d="M65.557 109.91L73.137 106.12L73.137 98.54L65.557 102.33Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,93.9 68.6,94.8 61.2,98.5 61.2,102.1 59.4,101.2 59.4,97.6   "
                  d="M68.425 96.184L70.269 97.106L62.689 100.896L62.689 104.584L60.845 103.662L60.845 99.974Z"
                />
                <path
                  opacity={0.29}
                  points="64,107.3 56.6,103.6 56.6,96.2 64,99.9   "
                  d="M65.557 109.91L57.977 106.12L57.977 98.54L65.557 102.33Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,100.2 79.4,107.6 72,111.3 64.6,107.6 64.6,100.2 72,96.5   "
                  d="M81.332 102.638L81.332 110.218L73.752 114.008L66.172 110.218L66.172 102.638L73.752 98.848Z"
                />
                <path
                  opacity={0.11}
                  points="72,111.3 79.4,107.6 79.4,100.2 72,103.9   "
                  d="M73.752 114.008L81.332 110.218L81.332 102.638L73.752 106.428Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,97.9 76.6,98.8 69.2,102.5 69.2,106.1 67.4,105.2 67.4,101.6   "
                  d="M76.62 100.282L78.464 101.204L70.883 104.994L70.883 108.681L69.04 107.759L69.04 104.072Z"
                />
                <path
                  opacity={0.29}
                  points="72,111.3 64.6,107.6 64.6,100.2 72,103.9   "
                  d="M73.752 114.008L66.172 110.218L66.172 102.638L73.752 106.428Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,87.6 40,88.2 72,104.2 80,100.2 80,99.6 48,83.6   "
                  d="M40.973 89.731L40.973 90.346L73.752 106.735L81.946 102.638L81.946 102.023L49.168 85.634Z"
                />
                <path
                  opacity={0.29}
                  points="72,104.2 40,88.2 40,87.6 72,103.6   "
                  d="M73.752 106.735L40.973 90.346L40.973 89.731L73.752 106.12Z"
                />
                <path
                  opacity={0.11}
                  points="72,104.2 80,100.2 80,99.6 72,103.6   "
                  d="M73.752 106.735L81.946 102.638L81.946 102.023L73.752 106.12Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,80.2 55.4,87.6 48,91.3 40.6,87.6 40.6,80.2 48,76.5   "
                  d="M56.748 82.151L56.748 89.731L49.168 93.521L41.588 89.731L41.588 82.151L49.168 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="48,91.3 55.4,87.6 55.4,80.2 48,83.9   "
                  d="M49.168 93.521L56.748 89.731L56.748 82.151L49.168 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,77.9 52.6,78.8 45.2,82.5 45.2,86.1 43.4,85.2 43.4,81.6   "
                  d="M52.036 79.795L53.88 80.717L46.3 84.507L46.3 88.195L44.456 87.273L44.456 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="48,91.3 40.6,87.6 40.6,80.2 48,83.9   "
                  d="M49.168 93.521L41.588 89.731L41.588 82.151L49.168 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,84.2 63.4,91.6 56,95.3 48.6,91.6 48.6,84.2 56,80.5   "
                  d="M64.942 86.248L64.942 93.828L57.362 97.618L49.782 93.828L49.782 86.248L57.362 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="56,95.3 63.4,91.6 63.4,84.2 56,87.9   "
                  d="M57.362 97.618L64.942 93.828L64.942 86.248L57.362 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,81.9 60.6,82.8 53.2,86.5 53.2,90.1 51.4,89.2 51.4,85.6   "
                  d="M60.23 83.892L62.074 84.814L54.494 88.604L54.494 92.292L52.65 91.37L52.65 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="56,95.3 48.6,91.6 48.6,84.2 56,87.9   "
                  d="M57.362 97.618L49.782 93.828L49.782 86.248L57.362 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,88.2 71.4,95.6 64,99.3 56.6,95.6 56.6,88.2 64,84.5   "
                  d="M73.137 90.346L73.137 97.926L65.557 101.716L57.977 97.926L57.977 90.346L65.557 86.556Z"
                />
                <path
                  opacity={0.11}
                  points="64,99.3 71.4,95.6 71.4,88.2 64,91.9   "
                  d="M65.557 101.716L73.137 97.926L73.137 90.346L65.557 94.136Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,85.9 68.6,86.8 61.2,90.5 61.2,94.1 59.4,93.2 59.4,89.6   "
                  d="M68.425 87.99L70.269 88.912L62.689 92.702L62.689 96.389L60.845 95.467L60.845 91.78Z"
                />
                <path
                  opacity={0.29}
                  points="64,99.3 56.6,95.6 56.6,88.2 64,91.9   "
                  d="M65.557 101.716L57.977 97.926L57.977 90.346L65.557 94.136Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,92.2 79.4,99.6 72,103.3 64.6,99.6 64.6,92.2 72,88.5   "
                  d="M81.332 94.443L81.332 102.023L73.752 105.813L66.172 102.023L66.172 94.443L73.752 90.653Z"
                />
                <path
                  opacity={0.11}
                  points="72,103.3 79.4,99.6 79.4,92.2 72,95.9   "
                  d="M73.752 105.813L81.332 102.023L81.332 94.443L73.752 98.233Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,89.9 76.6,90.8 69.2,94.5 69.2,98.1 67.4,97.2 67.4,93.6   "
                  d="M76.62 92.087L78.464 93.009L70.883 96.799L70.883 100.487L69.04 99.565L69.04 95.877Z"
                />
                <path
                  opacity={0.29}
                  points="72,103.3 64.6,99.6 64.6,92.2 72,95.9   "
                  d="M73.752 105.813L66.172 102.023L66.172 94.443L73.752 98.233Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,102.9 80,93.6 80,93 79.4,92.7 73.1,101.4   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L81.332 94.955L74.878 103.867Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,102.9 80,93.6 80,93 73.1,102.3   "
                  d="M74.878 105.403L81.946 95.877L81.946 95.262L74.878 104.789Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,79.6 40,80.2 72,96.2 80,92.2 80,91.6 48,75.6   "
                  d="M40.973 81.536L40.973 82.151L73.752 98.54L81.946 94.443L81.946 93.828L49.168 77.439Z"
                />
                <path
                  opacity={0.29}
                  points="72,96.2 40,80.2 40,79.6 72,95.6   "
                  d="M73.752 98.54L40.973 82.151L40.973 81.536L73.752 97.926Z"
                />
                <path
                  opacity={0.11}
                  points="72,96.2 80,92.2 80,91.6 72,95.6   "
                  d="M73.752 98.54L81.946 94.443L81.946 93.828L73.752 97.926Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,110.9 80,101.6 80,101 79.4,100.7 73.1,109.4   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L81.332 103.15L74.878 112.061Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,110.9 80,101.6 80,101 73.1,110.3   "
                  d="M74.878 113.598L81.946 104.072L81.946 103.457L74.878 112.983Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,72.2 55.4,79.6 48,83.3 40.6,79.6 40.6,72.2 48,68.5   "
                  d="M56.748 73.956L56.748 81.536L49.168 85.327L41.588 81.536L41.588 73.956L49.168 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="48,83.3 55.4,79.6 55.4,72.2 48,75.9   "
                  d="M49.168 85.327L56.748 81.536L56.748 73.956L49.168 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,69.9 52.6,70.8 45.2,74.5 45.2,78.1 43.4,77.2 43.4,73.6   "
                  d="M52.036 71.601L53.88 72.522L46.3 76.312L46.3 80L44.456 79.078L44.456 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="48,83.3 40.6,79.6 40.6,72.2 48,75.9   "
                  d="M49.168 85.327L41.588 81.536L41.588 73.956L49.168 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,76.2 63.4,83.6 56,87.3 48.6,83.6 48.6,76.2 56,72.5   "
                  d="M64.942 78.054L64.942 85.634L57.362 89.424L49.782 85.634L49.782 78.054L57.362 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="56,87.3 63.4,83.6 63.4,76.2 56,79.9   "
                  d="M57.362 89.424L64.942 85.634L64.942 78.054L57.362 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,73.9 60.6,74.8 53.2,78.5 53.2,82.1 51.4,81.2 51.4,77.6   "
                  d="M60.23 75.698L62.074 76.62L54.494 80.41L54.494 84.097L52.65 83.175L52.65 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="56,87.3 48.6,83.6 48.6,76.2 56,79.9   "
                  d="M57.362 89.424L49.782 85.634L49.782 78.054L57.362 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,80.2 71.4,87.6 64,91.3 56.6,87.6 56.6,80.2 64,76.5   "
                  d="M73.137 82.151L73.137 89.731L65.557 93.521L57.977 89.731L57.977 82.151L65.557 78.361Z"
                />
                <path
                  opacity={0.11}
                  points="64,91.3 71.4,87.6 71.4,80.2 64,83.9   "
                  d="M65.557 93.521L73.137 89.731L73.137 82.151L65.557 85.941Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,77.9 68.6,78.8 61.2,82.5 61.2,86.1 59.4,85.2 59.4,81.6   "
                  d="M68.425 79.795L70.269 80.717L62.689 84.507L62.689 88.195L60.845 87.273L60.845 83.585Z"
                />
                <path
                  opacity={0.29}
                  points="64,91.3 56.6,87.6 56.6,80.2 64,83.9   "
                  d="M65.557 93.521L57.977 89.731L57.977 82.151L65.557 85.941Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,84.2 79.4,91.6 72,95.3 64.6,91.6 64.6,84.2 72,80.5   "
                  d="M81.332 86.248L81.332 93.828L73.752 97.618L66.172 93.828L66.172 86.248L73.752 82.458Z"
                />
                <path
                  opacity={0.11}
                  points="72,95.3 79.4,91.6 79.4,84.2 72,87.9   "
                  d="M73.752 97.618L81.332 93.828L81.332 86.248L73.752 90.038Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,81.9 76.6,82.8 69.2,86.5 69.2,90.1 67.4,89.2 67.4,85.6   "
                  d="M76.62 83.892L78.464 84.814L70.883 88.604L70.883 92.292L69.04 91.37L69.04 87.682Z"
                />
                <path
                  opacity={0.29}
                  points="72,95.3 64.6,91.6 64.6,84.2 72,87.9   "
                  d="M73.752 97.618L66.172 93.828L66.172 86.248L73.752 90.038Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,95 80,85.7 80,85.1 79.4,84.8 73.1,93.5   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L81.332 86.863L74.878 95.775Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,95 80,85.7 80,85.1 73.1,94.4   "
                  d="M74.878 97.311L81.946 87.785L81.946 87.17L74.878 96.697Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,71.6 40,72.2 72,88.2 80,84.2 80,83.6 48,67.6   "
                  d="M40.973 73.342L40.973 73.956L73.752 90.346L81.946 86.248L81.946 85.634L49.168 69.245Z"
                />
                <path
                  opacity={0.29}
                  points="72,88.2 40,72.2 40,71.6 72,87.6   "
                  d="M73.752 90.346L40.973 73.956L40.973 73.342L73.752 89.731Z"
                />
                <path
                  opacity={0.11}
                  points="72,88.2 80,84.2 80,83.6 72,87.6   "
                  d="M73.752 90.346L81.946 86.248L81.946 85.634L73.752 89.731Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,64.2 55.4,71.6 48,75.3 40.6,71.6 40.6,64.2 48,60.5   "
                  d="M56.748 65.762L56.748 73.342L49.168 77.132L41.588 73.342L41.588 65.762L49.168 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="48,75.3 55.4,71.6 55.4,64.2 48,67.9   "
                  d="M49.168 77.132L56.748 73.342L56.748 65.762L49.168 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,61.9 52.6,62.8 45.2,66.5 45.2,70.1 43.4,69.2 43.4,65.6   "
                  d="M52.036 63.406L53.88 64.328L46.3 68.118L46.3 71.805L44.456 70.883L44.456 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="48,75.3 40.6,71.6 40.6,64.2 48,67.9   "
                  d="M49.168 77.132L41.588 73.342L41.588 65.762L49.168 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,68.2 63.4,75.6 56,79.3 48.6,75.6 48.6,68.2 56,64.5   "
                  d="M64.942 69.859L64.942 77.439L57.362 81.229L49.782 77.439L49.782 69.859L57.362 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="56,79.3 63.4,75.6 63.4,68.2 56,71.9   "
                  d="M57.362 81.229L64.942 77.439L64.942 69.859L57.362 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,65.9 60.6,66.8 53.2,70.5 53.2,74.1 51.4,73.2 51.4,69.6   "
                  d="M60.23 67.503L62.074 68.425L54.494 72.215L54.494 75.903L52.65 74.981L52.65 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="56,79.3 48.6,75.6 48.6,68.2 56,71.9   "
                  d="M57.362 81.229L49.782 77.439L49.782 69.859L57.362 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,72.2 71.4,79.6 64,83.3 56.6,79.6 56.6,72.2 64,68.5   "
                  d="M73.137 73.956L73.137 81.536L65.557 85.327L57.977 81.536L57.977 73.956L65.557 70.166Z"
                />
                <path
                  opacity={0.11}
                  points="64,83.3 71.4,79.6 71.4,72.2 64,75.9   "
                  d="M65.557 85.327L73.137 81.536L73.137 73.956L65.557 77.746Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,69.9 68.6,70.8 61.2,74.5 61.2,78.1 59.4,77.2 59.4,73.6   "
                  d="M68.425 71.601L70.269 72.522L62.689 76.312L62.689 80L60.845 79.078L60.845 75.391Z"
                />
                <path
                  opacity={0.29}
                  points="64,83.3 56.6,79.6 56.6,72.2 64,75.9   "
                  d="M65.557 85.327L57.977 81.536L57.977 73.956L65.557 77.746Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,76.2 79.4,83.6 72,87.3 64.6,83.6 64.6,76.2 72,72.5   "
                  d="M81.332 78.054L81.332 85.634L73.752 89.424L66.172 85.634L66.172 78.054L73.752 74.264Z"
                />
                <path
                  opacity={0.11}
                  points="72,87.3 79.4,83.6 79.4,76.2 72,79.9   "
                  d="M73.752 89.424L81.332 85.634L81.332 78.054L73.752 81.844Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,73.9 76.6,74.8 69.2,78.5 69.2,82.1 67.4,81.2 67.4,77.6   "
                  d="M76.62 75.698L78.464 76.62L70.883 80.41L70.883 84.097L69.04 83.175L69.04 79.488Z"
                />
                <path
                  opacity={0.29}
                  points="72,87.3 64.6,83.6 64.6,76.2 72,79.9   "
                  d="M73.752 89.424L66.172 85.634L66.172 78.054L73.752 81.844Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,63.6 40,64.2 72,80.2 80,76.2 80,75.6 48,59.6   "
                  d="M40.973 65.147L40.973 65.762L73.752 82.151L81.946 78.054L81.946 77.439L49.168 61.05Z"
                />
                <path
                  opacity={0.29}
                  points="72,80.2 40,64.2 40,63.6 72,79.6   "
                  d="M73.752 82.151L40.973 65.762L40.973 65.147L73.752 81.536Z"
                />
                <path
                  opacity={0.11}
                  points="72,80.2 80,76.2 80,75.6 72,79.6   "
                  d="M73.752 82.151L81.946 78.054L81.946 77.439L73.752 81.536Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,56.2 55.4,63.6 48,67.3 40.6,63.6 40.6,56.2 48,52.5   "
                  d="M56.748 57.567L56.748 65.147L49.168 68.937L41.588 65.147L41.588 57.567L49.168 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="48,67.3 55.4,63.6 55.4,56.2 48,59.9   "
                  d="M49.168 68.937L56.748 65.147L56.748 57.567L49.168 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,53.9 52.6,54.8 45.2,58.5 45.2,62.1 43.4,61.2 43.4,57.6   "
                  d="M52.036 55.211L53.88 56.133L46.3 59.923L46.3 63.611L44.456 62.689L44.456 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="48,67.3 40.6,63.6 40.6,56.2 48,59.9   "
                  d="M49.168 68.937L41.588 65.147L41.588 57.567L49.168 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,60.2 63.4,67.6 56,71.3 48.6,67.6 48.6,60.2 56,56.5   "
                  d="M64.942 61.665L64.942 69.245L57.362 73.035L49.782 69.245L49.782 61.665L57.362 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="56,71.3 63.4,67.6 63.4,60.2 56,63.9   "
                  d="M57.362 73.035L64.942 69.245L64.942 61.665L57.362 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,57.9 60.6,58.8 53.2,62.5 53.2,66.1 51.4,65.2 51.4,61.6   "
                  d="M60.23 59.309L62.074 60.23L54.494 64.02L54.494 67.708L52.65 66.786L52.65 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="56,71.3 48.6,67.6 48.6,60.2 56,63.9   "
                  d="M57.362 73.035L49.782 69.245L49.782 61.665L57.362 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,64.2 71.4,71.6 64,75.3 56.6,71.6 56.6,64.2 64,60.5   "
                  d="M73.137 65.762L73.137 73.342L65.557 77.132L57.977 73.342L57.977 65.762L65.557 61.972Z"
                />
                <path
                  opacity={0.11}
                  points="64,75.3 71.4,71.6 71.4,64.2 64,67.9   "
                  d="M65.557 77.132L73.137 73.342L73.137 65.762L65.557 69.552Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,61.9 68.6,62.8 61.2,66.5 61.2,70.1 59.4,69.2 59.4,65.6   "
                  d="M68.425 63.406L70.269 64.328L62.689 68.118L62.689 71.805L60.845 70.883L60.845 67.196Z"
                />
                <path
                  opacity={0.29}
                  points="64,75.3 56.6,71.6 56.6,64.2 64,67.9   "
                  d="M65.557 77.132L57.977 73.342L57.977 65.762L65.557 69.552Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,68.2 79.4,75.6 72,79.3 64.6,75.6 64.6,68.2 72,64.5   "
                  d="M81.332 69.859L81.332 77.439L73.752 81.229L66.172 77.439L66.172 69.859L73.752 66.069Z"
                />
                <path
                  opacity={0.11}
                  points="72,79.3 79.4,75.6 79.4,68.2 72,71.9   "
                  d="M73.752 81.229L81.332 77.439L81.332 69.859L73.752 73.649Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,65.9 76.6,66.8 69.2,70.5 69.2,74.1 67.4,73.2 67.4,69.6   "
                  d="M76.62 67.503L78.464 68.425L70.883 72.215L70.883 75.903L69.04 74.981L69.04 71.293Z"
                />
                <path
                  opacity={0.29}
                  points="72,79.3 64.6,75.6 64.6,68.2 72,71.9   "
                  d="M73.752 81.229L66.172 77.439L66.172 69.859L73.752 73.649Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,78.9 80,69.6 80,69 79.4,68.7 73.1,77.4   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L81.332 70.371L74.878 79.283Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,78.9 80,69.6 80,69 73.1,78.3   "
                  d="M74.878 80.819L81.946 71.293L81.946 70.679L74.878 80.205Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,86.9 80,77.6 80,77 79.4,76.7 73.1,85.4   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L81.332 78.566L74.878 87.478Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,86.9 80,77.6 80,77 73.1,86.3   "
                  d="M74.878 89.014L81.946 79.488L81.946 78.873L74.878 88.399Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,55.6 40,56.2 72,72.2 80,68.2 80,67.6 48,51.6   "
                  d="M40.973 56.953L40.973 57.567L73.752 73.956L81.946 69.859L81.946 69.245L49.168 52.855Z"
                />
                <path
                  opacity={0.29}
                  points="72,72.2 40,56.2 40,55.6 72,71.6   "
                  d="M73.752 73.956L40.973 57.567L40.973 56.953L73.752 73.342Z"
                />
                <path
                  opacity={0.11}
                  points="72,72.2 80,68.2 80,67.6 72,71.6   "
                  d="M73.752 73.956L81.946 69.859L81.946 69.245L73.752 73.342Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,48.2 55.4,55.6 48,59.3 40.6,55.6 40.6,48.2 48,44.5   "
                  d="M56.748 49.373L56.748 56.953L49.168 60.743L41.588 56.953L41.588 49.373L49.168 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="48,59.3 55.4,55.6 55.4,48.2 48,51.9   "
                  d="M49.168 60.743L56.748 56.953L56.748 49.373L49.168 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,45.9 52.6,46.8 45.2,50.5 45.2,54.1 43.4,53.2 43.4,49.6   "
                  d="M52.036 47.017L53.88 47.939L46.3 51.729L46.3 55.416L44.456 54.494L44.456 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="48,59.3 40.6,55.6 40.6,48.2 48,51.9   "
                  d="M49.168 60.743L41.588 56.953L41.588 49.373L49.168 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,52.2 63.4,59.6 56,63.3 48.6,59.6 48.6,52.2 56,48.5   "
                  d="M64.942 53.47L64.942 61.05L57.362 64.84L49.782 61.05L49.782 53.47L57.362 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="56,63.3 63.4,59.6 63.4,52.2 56,55.9   "
                  d="M57.362 64.84L64.942 61.05L64.942 53.47L57.362 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,49.9 60.6,50.8 53.2,54.5 53.2,58.1 51.4,57.2 51.4,53.6   "
                  d="M60.23 51.114L62.074 52.036L54.494 55.826L54.494 59.513L52.65 58.592L52.65 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="56,63.3 48.6,59.6 48.6,52.2 56,55.9   "
                  d="M57.362 64.84L49.782 61.05L49.782 53.47L57.362 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,56.2 71.4,63.6 64,67.3 56.6,63.6 56.6,56.2 64,52.5   "
                  d="M73.137 57.567L73.137 65.147L65.557 68.937L57.977 65.147L57.977 57.567L65.557 53.777Z"
                />
                <path
                  opacity={0.11}
                  points="64,67.3 71.4,63.6 71.4,56.2 64,59.9   "
                  d="M65.557 68.937L73.137 65.147L73.137 57.567L65.557 61.357Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,53.9 68.6,54.8 61.2,58.5 61.2,62.1 59.4,61.2 59.4,57.6   "
                  d="M68.425 55.211L70.269 56.133L62.689 59.923L62.689 63.611L60.845 62.689L60.845 59.001Z"
                />
                <path
                  opacity={0.29}
                  points="64,67.3 56.6,63.6 56.6,56.2 64,59.9   "
                  d="M65.557 68.937L57.977 65.147L57.977 57.567L65.557 61.357Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,60.2 79.4,67.6 72,71.3 64.6,67.6 64.6,60.2 72,56.5   "
                  d="M81.332 61.665L81.332 69.245L73.752 73.035L66.172 69.245L66.172 61.665L73.752 57.875Z"
                />
                <path
                  opacity={0.11}
                  points="72,71.3 79.4,67.6 79.4,60.2 72,63.9   "
                  d="M73.752 73.035L81.332 69.245L81.332 61.665L73.752 65.455Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,57.9 76.6,58.8 69.2,62.5 69.2,66.1 67.4,65.2 67.4,61.6   "
                  d="M76.62 59.309L78.464 60.23L70.883 64.02L70.883 67.708L69.04 66.786L69.04 63.099Z"
                />
                <path
                  opacity={0.29}
                  points="72,71.3 64.6,67.6 64.6,60.2 72,63.9   "
                  d="M73.752 73.035L66.172 69.245L66.172 61.665L73.752 65.455Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,71 80,61.7 80,61.1 79.4,60.8 73.1,69.5   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L81.332 62.279L74.878 71.191Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,71 80,61.7 80,61.1 73.1,70.4   "
                  d="M74.878 72.727L81.946 63.201L81.946 62.586L74.878 72.113Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,47.6 40,48.2 72,64.2 80,60.2 80,59.6 48,43.6   "
                  d="M40.973 48.758L40.973 49.373L73.752 65.762L81.946 61.665L81.946 61.05L49.168 44.661Z"
                />
                <path
                  opacity={0.29}
                  points="72,64.2 40,48.2 40,47.6 72,63.6   "
                  d="M73.752 65.762L40.973 49.373L40.973 48.758L73.752 65.147Z"
                />
                <path
                  opacity={0.11}
                  points="72,64.2 80,60.2 80,59.6 72,63.6   "
                  d="M73.752 65.762L81.946 61.665L81.946 61.05L73.752 65.147Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,40.2 55.4,47.6 48,51.3 40.6,47.6 40.6,40.2 48,36.5   "
                  d="M56.748 41.178L56.748 48.758L49.168 52.548L41.588 48.758L41.588 41.178L49.168 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="48,51.3 55.4,47.6 55.4,40.2 48,43.9   "
                  d="M49.168 52.548L56.748 48.758L56.748 41.178L49.168 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,37.9 52.6,38.8 45.2,42.5 45.2,46.1 43.4,45.2 43.4,41.6   "
                  d="M52.036 38.822L53.88 39.744L46.3 43.534L46.3 47.222L44.456 46.3L44.456 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="48,51.3 40.6,47.6 40.6,40.2 48,43.9   "
                  d="M49.168 52.548L41.588 48.758L41.588 41.178L49.168 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,44.2 63.4,51.6 56,55.3 48.6,51.6 48.6,44.2 56,40.5   "
                  d="M64.942 45.275L64.942 52.855L57.362 56.645L49.782 52.855L49.782 45.275L57.362 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="56,55.3 63.4,51.6 63.4,44.2 56,47.9   "
                  d="M57.362 56.645L64.942 52.855L64.942 45.275L57.362 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,41.9 60.6,42.8 53.2,46.5 53.2,50.1 51.4,49.2 51.4,45.6   "
                  d="M60.23 42.919L62.074 43.841L54.494 47.631L54.494 51.319L52.65 50.397L52.65 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="56,55.3 48.6,51.6 48.6,44.2 56,47.9   "
                  d="M57.362 56.645L49.782 52.855L49.782 45.275L57.362 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,48.2 71.4,55.6 64,59.3 56.6,55.6 56.6,48.2 64,44.5   "
                  d="M73.137 49.373L73.137 56.953L65.557 60.743L57.977 56.953L57.977 49.373L65.557 45.583Z"
                />
                <path
                  opacity={0.11}
                  points="64,59.3 71.4,55.6 71.4,48.2 64,51.9   "
                  d="M65.557 60.743L73.137 56.953L73.137 49.373L65.557 53.163Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,45.9 68.6,46.8 61.2,50.5 61.2,54.1 59.4,53.2 59.4,49.6   "
                  d="M68.425 47.017L70.269 47.939L62.689 51.729L62.689 55.416L60.845 54.494L60.845 50.807Z"
                />
                <path
                  opacity={0.29}
                  points="64,59.3 56.6,55.6 56.6,48.2 64,51.9   "
                  d="M65.557 60.743L57.977 56.953L57.977 49.373L65.557 53.163Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,52.2 79.4,59.6 72,63.3 64.6,59.6 64.6,52.2 72,48.5   "
                  d="M81.332 53.47L81.332 61.05L73.752 64.84L66.172 61.05L66.172 53.47L73.752 49.68Z"
                />
                <path
                  opacity={0.11}
                  points="72,63.3 79.4,59.6 79.4,52.2 72,55.9   "
                  d="M73.752 64.84L81.332 61.05L81.332 53.47L73.752 57.26Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,49.9 76.6,50.8 69.2,54.5 69.2,58.1 67.4,57.2 67.4,53.6   "
                  d="M76.62 51.114L78.464 52.036L70.883 55.826L70.883 59.513L69.04 58.592L69.04 54.904Z"
                />
                <path
                  opacity={0.29}
                  points="72,63.3 64.6,59.6 64.6,52.2 72,55.9   "
                  d="M73.752 64.84L66.172 61.05L66.172 53.47L73.752 57.26Z"
                />
              </g>
              <g>
                <path
                  fill="#999999"
                  points="40,39.6 40,40.2 72,56.2 80,52.2 80,51.6 48,35.6   "
                  d="M40.973 40.563L40.973 41.178L73.752 57.567L81.946 53.47L81.946 52.855L49.168 36.466Z"
                />
                <path
                  opacity={0.29}
                  points="72,56.2 40,40.2 40,39.6 72,55.6   "
                  d="M73.752 57.567L40.973 41.178L40.973 40.563L73.752 56.953Z"
                />
                <path
                  opacity={0.11}
                  points="72,56.2 80,52.2 80,51.6 72,55.6   "
                  d="M73.752 57.567L81.946 53.47L81.946 52.855L73.752 56.953Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="55.4,32.2 55.4,39.6 48,43.3 40.6,39.6 40.6,32.2 48,28.5   "
                  d="M56.748 32.983L56.748 40.563L49.168 44.353L41.588 40.563L41.588 32.983L49.168 29.193Z"
                />
                <path
                  opacity={0.11}
                  points="48,43.3 55.4,39.6 55.4,32.2 48,35.9   "
                  d="M49.168 44.353L56.748 40.563L56.748 32.983L49.168 36.773Z"
                />
                <path
                  opacity={0.3}
                  points="50.8,29.9 52.6,30.8 45.2,34.5 45.2,38.1 43.4,37.2 43.4,33.6   "
                  d="M52.036 30.627L53.88 31.549L46.3 35.339L46.3 39.027L44.456 38.105L44.456 34.417Z"
                />
                <path
                  opacity={0.29}
                  points="48,43.3 40.6,39.6 40.6,32.2 48,35.9   "
                  d="M49.168 44.353L41.588 40.563L41.588 32.983L49.168 36.773Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="63.4,36.2 63.4,43.6 56,47.3 48.6,43.6 48.6,36.2 56,32.5   "
                  d="M64.942 37.081L64.942 44.661L57.362 48.451L49.782 44.661L49.782 37.081L57.362 33.291Z"
                />
                <path
                  opacity={0.11}
                  points="56,47.3 63.4,43.6 63.4,36.2 56,39.9   "
                  d="M57.362 48.451L64.942 44.661L64.942 37.081L57.362 40.871Z"
                />
                <path
                  opacity={0.3}
                  points="58.8,33.9 60.6,34.8 53.2,38.5 53.2,42.1 51.4,41.2 51.4,37.6   "
                  d="M60.23 34.725L62.074 35.647L54.494 39.437L54.494 43.124L52.65 42.202L52.65 38.515Z"
                />
                <path
                  opacity={0.29}
                  points="56,47.3 48.6,43.6 48.6,36.2 56,39.9   "
                  d="M57.362 48.451L49.782 44.661L49.782 37.081L57.362 40.871Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="71.4,40.2 71.4,47.6 64,51.3 56.6,47.6 56.6,40.2 64,36.5   "
                  d="M73.137 41.178L73.137 48.758L65.557 52.548L57.977 48.758L57.977 41.178L65.557 37.388Z"
                />
                <path
                  opacity={0.11}
                  points="64,51.3 71.4,47.6 71.4,40.2 64,43.9   "
                  d="M65.557 52.548L73.137 48.758L73.137 41.178L65.557 44.968Z"
                />
                <path
                  opacity={0.3}
                  points="66.8,37.9 68.6,38.8 61.2,42.5 61.2,46.1 59.4,45.2 59.4,41.6   "
                  d="M68.425 38.822L70.269 39.744L62.689 43.534L62.689 47.222L60.845 46.3L60.845 42.612Z"
                />
                <path
                  opacity={0.29}
                  points="64,51.3 56.6,47.6 56.6,40.2 64,43.9   "
                  d="M65.557 52.548L57.977 48.758L57.977 41.178L65.557 44.968Z"
                />
              </g>
              <g>
                <path
                  fill="#FFCC00"
                  points="79.4,44.2 79.4,51.6 72,55.3 64.6,51.6 64.6,44.2 72,40.5   "
                  d="M81.332 45.275L81.332 52.855L73.752 56.645L66.172 52.855L66.172 45.275L73.752 41.485Z"
                />
                <path
                  opacity={0.11}
                  points="72,55.3 79.4,51.6 79.4,44.2 72,47.9   "
                  d="M73.752 56.645L81.332 52.855L81.332 45.275L73.752 49.065Z"
                />
                <path
                  opacity={0.3}
                  points="74.8,41.9 76.6,42.8 69.2,46.5 69.2,50.1 67.4,49.2 67.4,45.6   "
                  d="M76.62 42.919L78.464 43.841L70.883 47.631L70.883 51.319L69.04 50.397L69.04 46.709Z"
                />
                <path
                  opacity={0.29}
                  points="72,55.3 64.6,51.6 64.6,44.2 72,47.9   "
                  d="M73.752 56.645L66.172 52.855L66.172 45.275L73.752 49.065Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,54.9 80,45.6 80,45 79.4,44.7 73.1,53.4   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L81.332 45.787L74.878 54.699Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,54.9 80,45.6 80,45 73.1,54.3   "
                  d="M74.878 56.236L81.946 46.709L81.946 46.095L74.878 55.621Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="73.1,62.9 80,53.6 80,53 79.4,52.7 73.1,61.4   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L81.332 53.982L74.878 62.894Z"
                />
                <path
                  opacity={0.11}
                  points="73.1,62.9 80,53.6 80,53 73.1,62.3   "
                  d="M74.878 64.43L81.946 54.904L81.946 54.289L74.878 63.816Z"
                />
              </g>
              <g>
                <path
                  fill="#3366CC"
                  points="70.8,48 70.8,112 72,112.6 73.2,112 73.2,48 72,47.4   "
                  d="M72.522 49.168L72.522 114.725L73.752 115.339L74.981 114.725L74.981 49.168L73.752 48.553Z"
                />
                <path
                  opacity={0.29}
                  points="72,112.6 70.8,112 70.8,48 72,48.6   "
                  d="M73.752 115.339L72.522 114.725L72.522 49.168L73.752 49.782Z"
                />
                <path
                  opacity={0.11}
                  points="72,112.6 73.2,112 73.2,48 72,48.6   "
                  d="M73.752 115.339L74.981 114.725L74.981 49.168L73.752 49.782Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="selection-layer" />
      <g id="global-selection-layer" />
    </g>
  </svg>

  {selectedGroup && (
    <div className={divClass + "relative bottom-0 left-0 w-1/2 bg-white bg-opacity-10 rounded-lg shadow p-4 items-center justify-center"}>
      <h2 className="text-xl font-bold mb-4 justify-center dark:text-white">Rack:{selectedGroup}</h2>
      {renderTable(selectedGroup)}
    </div>
  )}
</div>
)};
export default SVGComponent;