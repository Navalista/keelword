import { Templates } from '@/components/Pages/templates'
import Loader from '@/components/UI/loader/Loader'
import useLoading from '@/hooks/useLoading'
import useProperty from '@/hooks/useProperty'
import React, { FC } from 'react'

const TOWAGE: FC = () => {
   const MD = useProperty('MD')
   // console.log(MD)

   const isLoading = useLoading()

   if (isLoading) return <Loader />

   return <Templates.InfoPage content={MD} options={{ height: 517 }} />
}
export default TOWAGE