export const Boxes = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 overflow-visible" viewBox="0 0 427 427">
            <g id="Data_Box" data-name="Data Box">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                    <g id={`Line_${index+1}`} transform={`translate(0, ${index * 43})`}>
                        <g id="Rectangle_191528" data-name="Rectangle 191528" transform="translate(-0.004 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                        </g>
                        <g id="Rectangle_191528-2" data-name="Rectangle 191528" transform="translate(43.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="31" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="30" fill="none" />
                        </g>
                        <g id="Rectangle_191528-3" data-name="Rectangle 191528" transform="translate(86.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="33" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="32" height="31" fill="none" />
                        </g>
                        <g id="Rectangle_191528-4" data-name="Rectangle 191528" transform="translate(131.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                        </g>
                        <g id="Rectangle_191528-5" data-name="Rectangle 191528" transform="translate(175.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="31" height="31" stroke="none" />
                            <rect x="0.5" y="0.5" width="30" height="30" fill="none" />
                        </g>
                        <g id="Rectangle_191528-6" data-name="Rectangle 191528" transform="translate(219.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="31" height="31" stroke="none" />
                            <rect x="0.5" y="0.5" width="30" height="30" fill="none" />
                        </g>
                        <g id="Rectangle_191528-7" data-name="Rectangle 191528" transform="translate(262.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                        </g>
                        <g id="Rectangle_191528-8" data-name="Rectangle 191528" transform="translate(306.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="33" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="32" height="31" fill="none" />
                        </g>
                        <g id="Rectangle_191528-9" data-name="Rectangle 191528" transform="translate(350.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="31" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="30" fill="none" />
                        </g>
                        <g id="Rectangle_191528-10" data-name="Rectangle 191528" transform="translate(394.996 -0.004)" fill="none" stroke="lime" stroke-width="1">
                            <rect width="32" height="32" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                        </g>
                    </g>
                ))}

            </g>
        </svg>
    )
}