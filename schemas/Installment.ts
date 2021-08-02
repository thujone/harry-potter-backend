import { list } from '@keystone-next/keystone/schema'
import { text, integer, relationship } from '@keystone-next/fields'


export const Installment = list({
  fields: {
    installment: integer({ isRequired: true, isIndexed: true }),
    title: text({ isRequired: true }),
    source: text({ isRequired: true })
  }
})