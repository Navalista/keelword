import { useAppSelector } from '@/hooks/redux'
import React, { FC, ReactNode, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundaryComponent } from './Error/Error'
import css from './Dashboard.layout.module.scss'
import Seo from './seo'

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
   const isLaptop = useAppSelector((state) => state.content.mediaQuery.isLaptop)
   const i18n = useAppSelector((state) => state.content.i18n)
   const id = useAppSelector((state) => state.content._id)
   const [scrollStep, setcrollStep] = useState(0)

   return (
      <ErrorBoundary fallbackRender={ErrorBoundaryComponent}>
         <Seo siteTitle='Dashboard' pageTitle='Serhii Otinov' description='All in one!' />
         <main className={css.wrapper}>{children}</main>
      </ErrorBoundary>
   )
}

export default DashboardLayout
