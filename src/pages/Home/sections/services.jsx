import React from 'react';
import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
// import { pointRadial } from 'd3-shape';

const data = {
  name: 'Ziola Research',
  children: [
    {
      name: 'Retrospective',
      children: [
        { name: 'IRB/EC Approvals' },
        { name: "Consent Waiver's" },
        { name: 'Demographic Data' },
        { name: 'Pathological Data' },
        { name: 'Up to 10 Years Old Samples' },
      ],
    },
    {
      name: 'Prospective',
      children: [
        { name: 'RB/EC Approvals' },
        { name: 'ICF & Protocol' },
        { name: 'Demographic Data' },
        { name: 'Pathological Data' },
        { name: 'Fresh Samples' },
      ],
    },
    {
      name: 'Clinical Trials',
      children: [
        { name: 'Project Management' },
        { name: 'Data Management' },
        { name: 'Medical Monitoring' },
        { name: 'BA/BE Studies' },
        { name: 'Preclinical Trials' },
        { name: 'Phase-I & IV Trials' },
      ],
    },
  ],
};

const Services = ({ width, height }) => {
    // const [update, setUpdate] = useState(false);
    const root = hierarchy(data);
  
    return (
      <svg width={width} height={height}>
        <Group top={50} left={width / 2 - 100}>
          <Tree root={root} size={[height - 100, width - 200]}>
            {(tree) => (
              <Group>
                {tree.links().map((link, i) => (
                  <path
                    key={i}
                    d={`M${link.source.y},${link.source.x} C${
                      (link.source.y + link.target.y) / 2
                    },${link.source.x} ${(link.source.y + link.target.y) / 2},${
                      link.target.x
                    } ${link.target.y},${link.target.x}`}
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ))}
  
                {tree.descendants().map((node, i) => (
                  <Group key={i} top={node.x} left={node.y}>
                    <text
                      dy="0.33em"
                      fontSize={12}
                      textAnchor="middle"
                      style={{ pointerEvents: 'none' }}
                      fill="#1e293b"
                    >
                      {node.data.name}
                    </text>
                  </Group>
                ))}
              </Group>
            )}
          </Tree>
        </Group>
      </svg>
    );
  };
  

export default Services