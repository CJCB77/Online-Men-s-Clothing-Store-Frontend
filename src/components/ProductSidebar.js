import React from 'react'
import sidebarStyles from "../styles/sidebar.module.css"

export default function ProductSidebar() {
  return (
    <aside className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.header}>
        <h1>Filter By</h1>
        <button className={sidebarStyles.clear}>Clear all</button>
      </div>
      <hr />

      <article className={sidebarStyles.categories}>
        <h2>Category</h2>
        <button className={sidebarStyles.clear}>Clear</button>
        
        <form action="" className={sidebarStyles.categories__form}>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='chinos' id='chinos' value="chinos" />
            <label htmlFor="chinos">Chinos</label>
          </div>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='dress' id='dress' value="dress" />
            <label htmlFor="dress">Dress</label>
          </div>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='joggers' id='joggers' value="joggers" />
            <label htmlFor="joggers">Joggers</label>
          </div>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='jeans' id='jeans' value="jeans" />
            <label htmlFor="jeans">Jeans</label>
          </div>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='cargos' id='cargos' value="cargos" />
            <label htmlFor="cargos">Cargos</label>
          </div>
          <div className={sidebarStyles.form__control}>
            <input type="checkbox" name='sweapants' id='sweapants' value="sweapants" />
            <label htmlFor="sweapants">Sweatpants</label>
          </div>
        </form>
        <hr className={sidebarStyles.divider} />
      </article>

    </aside>
  )
}
