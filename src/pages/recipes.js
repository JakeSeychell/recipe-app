import React from 'react'
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/seo'

const Recipes = () => {
    return (
        <>
        <Layout>
        <SEO title= 'recipes'/>
          <main className='page'>
            <AllRecipes/>
          </main>
            
        </Layout>
        </>
    )
}

export default Recipes