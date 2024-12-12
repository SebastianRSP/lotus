'use client'

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const Boxes = ({ activePercentage, tabIndex, previousTabIndex, tabData }) => {
    // Array of refs for each line (row) of boxes
    const rowRefs = useRef([...Array(10)].map(() => React.createRef()));

    useEffect(() => {
        // Calculate cumulative lines for each tab based on tabData percentages
        let cumulativeLines = 0;
        const cumulativeLineIndices = tabData.map((tab) => {
            const linesForTab = (tab.percentage / 100) * 100;
            cumulativeLines += linesForTab;
            return cumulativeLines;
        });

        // Find the current tab's line index range
        const startLineIndex = tabIndex > 0 ? cumulativeLineIndices[tabIndex - 1] : 0;
        const endLineIndex = cumulativeLineIndices[tabIndex] - 1;

        console.log(startLineIndex)
        console.log(endLineIndex)

        // Find the previous tab's line index range
        const previousStartLineIndex = previousTabIndex > 0 ? cumulativeLineIndices[previousTabIndex - 1] : 0;
        const previousEndLineIndex = cumulativeLineIndices[previousTabIndex] - 1;

        console.log(previousStartLineIndex)
        console.log(previousEndLineIndex)

        // Update rows according to active, previous, and next states

        rowRefs.current.forEach((row, rowIndex) => {
            row.current.childNodes.forEach((box, boxIndex) => {
                // Calculate the current box's index in the flattened grid
                const boxIndexGlobal = rowIndex * 10 + boxIndex;
        
                if ( boxIndexGlobal >= previousStartLineIndex && boxIndexGlobal <= previousEndLineIndex ){
                    // Determine fill color based on the position of the previous active line
                    const fillColor =
                        previousEndLineIndex < startLineIndex
                            ? '#7FFF8080' // Previous active line is before the current active line
                            : 'none'; // Previous active line is after the current active line
        
                    gsap.to(box, { fill: fillColor, duration: 0.5 });
                } else if (boxIndexGlobal < startLineIndex) {
                    // Previous boxes (with opacity 0.5)
                    gsap.to(box, { fill: '#7FFF8080', duration: 0.5 });
                } else if ( boxIndexGlobal >= startLineIndex && boxIndexGlobal <= endLineIndex ){
                    // Current active boxes (full opacity)
                    gsap.to(box, { fill: '#00FF03', duration: 0.5 });
                } else {
                    // Next boxes (no fill)
                    gsap.to(box, { fill: 'none', duration: 0.5 });
                }
            });
        });

        // rowRefs.current.forEach((row, rowIndex) => {
        //     if (rowIndex >= previousStartLineIndex && rowIndex <= previousEndLineIndex) {
        //         // Determine fill color based on the position of the previous active line
        //         const fillColor = (previousEndLineIndex < startLineIndex)
        //             ? '#7FFF8080' // Previous active line is before the current active line
        //             : 'none'; // Previous active line is after the current active line

        //         row.current.childNodes.forEach((box) => {
        //             gsap.to(box, { fill: fillColor });
        //         });
        //         gsap.to(row.current, { x: 0, duration: 1, ease: 'power1.inOut' }); // Reset position
        //     } else if (rowIndex < startLineIndex) {
        //         // Previous lines (with opacity 0.5)
        //         row.current.childNodes.forEach((box) => {
        //             gsap.to(box, { fill: '#7FFF8080' });
        //         });
        //         gsap.set(row.current, { x: 0 }); // Keep transformed
        //     } else if (rowIndex >= startLineIndex && rowIndex <= endLineIndex) {
        //         // Current active lines (full opacity)
        //         row.current.childNodes.forEach((box) => {
        //             gsap.to(box, { fill: '#00FF03' });
        //         });
        //         gsap.to(row.current, { x: 44, duration: 1, ease: 'power1.inOut' });
        //     } else {
        //         // Next lines (no fill)
        //         row.current.childNodes.forEach((box) => {
        //             gsap.to(box, { fill: 'none' });
        //         });
        //         gsap.set(row.current, { x: 0 }); // Reset transformation
        //     }
        // });
    }, [activePercentage, tabIndex, previousTabIndex, tabData]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 overflow-visible" viewBox="0 0 427 427">
            <g id="Data_Box" data-name="Data Box">
                {[...Array(10)].map((_, index) => (
                    <g
                        key={index}
                        ref={rowRefs.current[index]}
                        id={`Line_${index + 1}`}
                        transform={`translate(0, ${index * 43})`}
                    >
                        {/* Define each box in the row */}
                        {[0, 43.996, 86.996, 131.996, 175.996, 219.996, 262.996, 306.996, 350.996, 394.996].map(
                            (xOffset, boxIndex) => (
                                <g key={boxIndex} transform={`translate(${xOffset} -0.004)`} fill="none" stroke="lime" strokeWidth="1">
                                    <rect width="32" height="32" stroke="none" />
                                    <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                                </g>
                            )
                        )}
                    </g>
                ))}
            </g>
        </svg>
    );
};
