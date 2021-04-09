import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


const getData = graphql`
query {
  site {
    siteMetadata {
      title
      description
      author
      person {
        name
        age
      }
      simpleData
      complexData {
        name
        age
      }
    }
  }
}
`


export default FetchData = () => {

    const data = useStaticQuery(getData)

    return (
        <div>
            
        </div>
    )
}



