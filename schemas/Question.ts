import { list } from '@keystone-next/keystone/schema'
import { text, integer, relationship, select } from '@keystone-next/fields'

export const Question = list({
  fields: {
    status: select({
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
        { label: 'Draft', value: 'DRAFT' }
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' }
      }
    }),
    screenshot: relationship({
      ref: 'QuestionImage.screenshot',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] }
      }
    }),
    installment: integer({ isRequired: true, isIndexed: true }),
    question: text({ isRequired: true }),
    answer: text({ isRequired: true }),
    incorrect1: text({ isRequired: true }),
    incorrect2: text({ isRequired: true }),
    incorrect3: text({ isRequired: true }),
    incorrect4: text({ isRequired: true }),
    incorrect5: text({ isRequired: true }),
    difficulty: integer({ isRequired: true })
  }
})