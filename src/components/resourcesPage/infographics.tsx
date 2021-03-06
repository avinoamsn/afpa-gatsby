import React, { useState } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { goDown, goUp, pagination } from './pagination'

const Infographics = () => {
	const data = useStaticQuery(graphql`
		query Infographics {
			allWordpressWpInfographics {
				edges {
					node {
						id
						acf {
							textLink
						}
						title
						featured_media {
							localFile {
								childImageSharp {
									fluid(maxWidth: 500) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const infographics: object[] = pagination(
		data.allWordpressWpInfographics.edges,
		6
	)
	const [selectedPage, setSelectedPage] = useState(0)

	return (
		<div className="flex flex-col items-center">
			<div
				className="max-w-1275 min-w-full flex flex-wrap justify-start items-start"
				style={{ width: `90vw` }}
			>
				{(infographics[selectedPage] as any).map(infographic => {
					infographic = infographic.node
					return (
						<OutboundLink
							target="_blank"
							key={infographic.id}
							href={infographic.acf.textLink}
							className="w-full sm:w-1/2 lg:w-1/3 p-2"
						>
							<Img
								className="max-h-335"
								fluid={
									infographic.featured_media.localFile.childImageSharp.fluid
								}
							/>
							<h6
								className="text-darkGray"
								dangerouslySetInnerHTML={{ __html: infographic.title }}
							/>
						</OutboundLink>
					)
				})}
			</div>

			<div className="flex mt-4">
				<button
					className="mx-2 w-32"
					onClick={() =>
						goDown(selectedPage, infographics.length, setSelectedPage)
					}
				>
					Back
				</button>
				<button
					className="mx-2 w-32"
					onClick={() =>
						goUp(selectedPage, infographics.length, setSelectedPage)
					}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default Infographics
