import React from "react";
import ToiletLayout from "../toiler_layout/toilet_layout";

const Layout_monitor = () => {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="1667px" height="1031px" viewBox="-0.5 -0.5 1667 1031" content="<mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2023-11-22T02:37:56.243Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0&quot; etag=&quot;ln12KzKjv09yL8Tn7qwv&quot; version=&quot;22.1.3&quot; type=&quot;google&quot;><diagram id=&quot;CtjVcW7jsToqshqA-c7L&quot; name=&quot;Page-1&quot;>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</diagram></mxfile>" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <defs />
                <g>
                    <rect x="43.25" y="0.75" width="1622.5" height="1028.5" rx="10.29" ry="10.29" fill="#f9f9f9" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />

                    <rect x={430} y={340} width={150} height={350} rx="7.5" ry="7.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={590} y={340} width={240} height={470} rx="4.8" ry="4.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={590} y={820} width={240} height={170} rx="8.5" ry="8.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x="961.99" y={338} width={340} height={380} rx="6.8" ry="6.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1317} y={820} width={313} height={170} rx="6.8" ry="6.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={840} y={340} width={110} height={380} rx="5.5" ry="5.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1420} y={340} width={210} height={470} rx="8.4" ry="8.4" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1310} y={340} width={100} height={380} rx={5} ry={5} fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={960} y="123.5" width={340} height={170} rx="5.1" ry="5.1" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1310} y="123.5" width={100} height={170} rx={5} ry={5} fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={840} y="123.5" width={110} height={170} rx="5.5" ry="5.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={590} y="123.5" width={240} height={170} rx="6.8" ry="6.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={430} y="123.5" width={150} height={170} rx="7.5" ry="7.5" fill="#fff2cc" stroke="#d6b656" strokeWidth={2} pointerEvents="all" />
                    <rect x={960} y="43.5" width={450} height={70} rx="3.5" ry="3.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1420} y="123.5" width={210} height={170} rx="6.8" ry="6.8" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x={1420} y="43.5" width={210} height={70} rx="3.5" ry="3.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />



                    <ToiletLayout />

                    <rect x={440} y={338} width={130} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '128px', height: '1px', paddingTop: '353px', marginLeft: '441px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Racking Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={505} y={361} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Racking Z...</text>
                        </switch>
                    </g>

                    <rect x={440} y="123.5" width={130} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '128px', height: '1px', paddingTop: '139px', marginLeft: '441px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Racking Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={505} y={147} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Racking Z...</text>
                        </switch>
                    </g>
                    <rect x={645} y="123.5" width={130} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '128px', height: '1px', paddingTop: '139px', marginLeft: '646px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Polymer B Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={710} y={147} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Polymer B...</text>
                        </switch>
                    </g>
                    <rect x={645} y={340} width={130} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '128px', height: '1px', paddingTop: '355px', marginLeft: '646px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Polymer A Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={710} y={363} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Polymer A...</text>
                        </switch>
                    </g>
                    <rect x={633} y={820} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '835px', marginLeft: '634px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Formation A Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={711} y={843} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Formation A...</text>
                        </switch>
                    </g>
                    <rect x={775} y={515} width={155} height={30} fill="none" stroke="none" transform="rotate(-90,852.5,530)" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)rotate(-90 852.5 530)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '530px', marginLeft: '776px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Dipping Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={853} y={538} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Dipping Zone</text>
                        </switch>
                    </g>
                    <rect x={775} y="193.5" width={155} height={30} fill="none" stroke="none" transform="rotate(-90,852.5,208.5)" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)rotate(-90 852.5 208.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '209px', marginLeft: '776px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Dipping Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={853} y={217} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Dipping Zone</text>
                        </switch>
                    </g>
                    <rect x="1049.78" y={340} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '355px', marginLeft: '1051px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Stacking Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1127} y={363} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Stacking Zo...</text>
                        </switch>
                    </g>
                    <rect x="1052.5" y="123.5" width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '139px', marginLeft: '1054px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Stacking Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1130} y={147} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Stacking Zo...</text>
                        </switch>
                    </g>
                    <rect x={1250} y="505.5" width={155} height={30} fill="none" stroke="none" transform="rotate(-90,1327.5,520.5)" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)rotate(-90 1327.5 520.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '521px', marginLeft: '1251px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Molding Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1328} y={529} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Molding Zone</text>
                        </switch>
                    </g>
                    <rect x="1247.92" y="193.5" width={155} height={30} fill="none" stroke="none" transform="rotate(-90,1325.42,208.5)" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)rotate(-90 1325.42 208.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '209px', marginLeft: '1249px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Molding Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1325} y={217} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Molding Zone</text>
                        </switch>
                    </g>
                    <rect x="1448.82" y={340} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '355px', marginLeft: '1450px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>TFT Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1526} y={363} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">TFT Zone</text>
                        </switch>
                    </g>
                    <rect x="1447.5" y="123.5" width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '139px', marginLeft: '1449px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>RBI Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1525} y={147} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">RBI Zone</text>
                        </switch>
                    </g>
                    <rect x="948.75" y={40} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '55px', marginLeft: '950px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <span style={{ fontSize: '17px' }}>New line Zone</span>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1026} y={63} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">New line Zo...</text>
                        </switch>
                    </g>
                    <rect x="1397.5" y={40} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '55px', marginLeft: '1399px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Relex Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1475} y={63} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Relex Zone</text>
                        </switch>
                    </g>
                    <rect x={590} y="43.5" width={360} height={70} rx="3.5" ry="3.5" fill="#ffffff" stroke="rgb(0, 0, 0)" strokeWidth={2} pointerEvents="all" />
                    <rect x="528.92" y="42.5" width={281} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '279px', height: '1px', paddingTop: '58px', marginLeft: '530px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Formation B Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={669} y={66} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Formation B Zone</text>
                        </switch>
                    </g>
                    <rect x={0} y="83.5" width={550} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '548px', height: '1px', paddingTop: '99px', marginLeft: '1px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '17px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <b>
                                                <font style={{ fontSize: '38px' }}><font color="#127b96">900</font>
                                                    FACTORY <font color="#828231">TOILET MONITOR</font></font>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={275} y={104} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="17px" textAnchor="middle">900 FACTORY TOILET MONITOR</text>
                        </switch>
                    </g>
                    <path d="M 80 300.5 L 160 300.5 L 160 290 L 180 305 L 160 320 L 160 309.5 L 80 309.5 Z" fill="#bac8d3" stroke="#23445d" strokeWidth={2} strokeMiterlimit={10} pointerEvents="all" />
                    <rect x="1397.5" y={820} width={155} height={30} fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject pointerEvents="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style={{ overflow: 'visible', textAlign: 'left' }}>
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '153px', height: '1px', paddingTop: '835px', marginLeft: '1399px' }}>
                                    <div data-drawio-colors="color: rgb(0, 0, 0); " style={{ boxSizing: 'border-box', fontSize: '0px', textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', fontSize: '28px', fontFamily: 'Helvetica', color: 'rgb(0, 0, 0)', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', overflowWrap: 'normal' }}>
                                            <font style={{ fontSize: '17px' }}>Aging Zone</font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={1475} y={843} fill="rgb(0, 0, 0)" fontFamily="Helvetica" fontSize="28px" textAnchor="middle">Aging Zone</text>
                        </switch>
                    </g>

                </g>
                <switch>
                    <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
                    <a transform="translate(0,-5)" xlinkHref="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank">
                        <text textAnchor="middle" fontSize="10px" x="50%" y="100%">Text is not SVG - cannot
                            display</text>
                    </a>
                </switch>
            </svg>
        </>
    )
}

export default Layout_monitor