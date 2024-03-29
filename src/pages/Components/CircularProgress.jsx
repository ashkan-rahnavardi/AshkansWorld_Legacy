import React from 'react';
import './CircularProgress.scss';

export function CircularProgress({ skills }) {
	return (
		<div className="about__circular-progress">
			<ul className="progress">
				{skills.map((skill, index) => (
					<li
						data-name={skill.name}
						data-percent={skill.percent + '%'}
						key={index}
					>
						<svg viewBox="-10 -10 220 220">
							<g fill="none" strokeWidth="6" transform="translate(100,100)">
								<path
									d="M 0,-100 A 100,100 0 0,1 86.6,-50"
									stroke="url(#cl1)"
								/>
								<path
									d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
									stroke="url(#cl2)"
								/>
								<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
								<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
								<path
									d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
									stroke="url(#cl5)"
								/>
								<path
									d="M -86.6,-50 A 100,100 0 0,1 0,-100"
									stroke="url(#cl6)"
								/>
							</g>
						</svg>
						<svg viewBox="-10 -10 220 220">
							<path
								d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
								strokeDashoffset={skill.percent * 6.29}
							></path>
						</svg>
					</li>
				))}
			</ul>
			<svg width="0" height="0">
				<defs>
					<linearGradient
						id="cl1"
						gradientUnits="objectBoundingBox"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
					>
						<stop stopColor="#618099" />
						<stop offset="100%" stopColor="#8e6677" />
					</linearGradient>
					<linearGradient
						id="cl2"
						gradientUnits="objectBoundingBox"
						x1="0"
						y1="0"
						x2="0"
						y2="1"
					>
						<stop stopColor="#8e6677" />
						<stop offset="100%" stopColor="#9b5e67" />
					</linearGradient>
					<linearGradient
						id="cl3"
						gradientUnits="objectBoundingBox"
						x1="1"
						y1="0"
						x2="0"
						y2="1"
					>
						<stop stopColor="#9b5e67" />
						<stop offset="100%" stopColor="#9c787a" />
					</linearGradient>
					<linearGradient
						id="cl4"
						gradientUnits="objectBoundingBox"
						x1="1"
						y1="1"
						x2="0"
						y2="0"
					>
						<stop stopColor="#9c787a" />
						<stop offset="100%" stopColor="#817a94" />
					</linearGradient>
					<linearGradient
						id="cl5"
						gradientUnits="objectBoundingBox"
						x1="0"
						y1="1"
						x2="0"
						y2="0"
					>
						<stop stopColor="#817a94" />
						<stop offset="100%" stopColor="#498a98" />
					</linearGradient>
					<linearGradient
						id="cl6"
						gradientUnits="objectBoundingBox"
						x1="0"
						y1="1"
						x2="1"
						y2="0"
					>
						<stop stopColor="#498a98" />
						<stop offset="100%" stopColor="#618099" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
// return (
// <div>
// 	<ul className="progress">
// 		<li data-name="SVG Skill" data-percent="25%">
// 			<svg viewBox="-10 -10 220 220">
// 				<g fill="none" stroke-width="3" transform="translate(100,100)">
// 					<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 					<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 					<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 					<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 					<path
// 						d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 						stroke="url(#cl5)"
// 					/>
// 					<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 				</g>
// 			</svg>
// 			<svg viewBox="-10 -10 220 220">
// 				<path
// 					d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 					strokeDashoffset="158"
// 				></path>
// 			</svg>
// 		</li>
// 			<li data-name="HTML5 Skill" data-percent="87%">
// 				<svg viewBox="-10 -10 220 220">
// 					<g fill="none" stroke-width="2" transform="translate(100,100)">
// 						<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 						<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 						<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 						<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 						<path
// 							d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 							stroke="url(#cl5)"
// 						/>
// 						<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 					</g>
// 				</svg>
// 				<svg viewBox="-10 -10 220 220">
// 					<path
// 						d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 						stroke-dashoffset="547"
// 					></path>
// 				</svg>
// 			</li>
// 			<li data-name="jQuery Skill" data-percent="13%">
// 				<svg viewBox="-10 -10 220 220">
// 					<g fill="none" stroke-width="12" transform="translate(100,100)">
// 						<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 						<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 						<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 						<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 						<path
// 							d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 							stroke="url(#cl5)"
// 						/>
// 						<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 					</g>
// 				</svg>
// 				<svg viewBox="-10 -10 220 220">
// 					<path
// 						d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 						stroke-dashoffset="81"
// 					></path>
// 				</svg>
// 			</li>
// 			<li data-name="UI Skill" data-percent="97%">
// 				<svg viewBox="-10 -10 220 220">
// 					<g fill="none" stroke-width="9" transform="translate(100,100)">
// 						<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 						<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 						<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 						<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 						<path
// 							d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 							stroke="url(#cl5)"
// 						/>
// 						<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 					</g>
// 				</svg>
// 				<svg viewBox="-10 -10 220 220">
// 					<path
// 						d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 						stroke-dashoffset="610"
// 					></path>
// 				</svg>
// 			</li>
// 			<li data-name="PHP Skill" data-percent="58%">
// 				<svg viewBox="-10 -10 220 220">
// 					<g fill="none" stroke-width="6" transform="translate(100,100)">
// 						<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 						<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 						<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 						<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 						<path
// 							d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 							stroke="url(#cl5)"
// 						/>
// 						<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 					</g>
// 				</svg>
// 				<svg viewBox="-10 -10 220 220">
// 					<path
// 						d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 						stroke-dashoffset="364"
// 					></path>
// 				</svg>
// 			</li>
// <li data-name="CSS Skill" data-percent="100%">
// 	<svg viewBox="-10 -10 220 220">
// 		<g fill="none" stroke-width="6" transform="translate(100,100)">
// 			<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
// 			<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
// 			<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
// 			<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
// 			<path
// 				d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
// 				stroke="url(#cl5)"
// 			/>
// 			<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
// 		</g>
// 	</svg>
// 	<svg viewBox="-10 -10 220 220">
// 		<path
// 			d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
// 			stroke-dashoffset="629"
// 		></path>
// 	</svg>
// </li>
// 		</ul>
// <svg width="0" height="0">
// 	<defs>
// 		<linearGradient
// 			id="cl1"
// 			gradientUnits="objectBoundingBox"
// 			x1="0"
// 			y1="0"
// 			x2="1"
// 			y2="1"
// 		>
// 			<stop stopColor="#618099" />
// 			<stop offset="100%" stopColor="#8e6677" />
// 		</linearGradient>
// 				<linearGradient
// 					id="cl2"
// 					gradientUnits="objectBoundingBox"
// 					x1="0"
// 					y1="0"
// 					x2="0"
// 					y2="1"
// 				>
// 					<stop stopColor="#8e6677" />
// 					<stop offset="100%" stopColor="#9b5e67" />
// 				</linearGradient>
// 				<linearGradient
// 					id="cl3"
// 					gradientUnits="objectBoundingBox"
// 					x1="1"
// 					y1="0"
// 					x2="0"
// 					y2="1"
// 				>
// 					<stop stopColor="#9b5e67" />
// 					<stop offset="100%" stopColor="#9c787a" />
// 				</linearGradient>
// 				<linearGradient
// 					id="cl4"
// 					gradientUnits="objectBoundingBox"
// 					x1="1"
// 					y1="1"
// 					x2="0"
// 					y2="0"
// 				>
// 					<stop stopColor="#9c787a" />
// 					<stop offset="100%" stopColor="#817a94" />
// 				</linearGradient>
// 				<linearGradient
// 					id="cl5"
// 					gradientUnits="objectBoundingBox"
// 					x1="0"
// 					y1="1"
// 					x2="0"
// 					y2="0"
// 				>
// 					<stop stopColor="#817a94" />
// 					<stop offset="100%" stopColor="#498a98" />
// 				</linearGradient>
// <linearGradient
// 	id="cl6"
// 	gradientUnits="objectBoundingBox"
// 	x1="0"
// 	y1="1"
// 	x2="1"
// 	y2="0"
// >
// 	<stop stopColor="#498a98" />
// 	<stop offset="100%" stopColor="#618099" />
// </linearGradient>
// 	</defs>
// </svg>
// 	</div>
// );
