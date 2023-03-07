import Filter from '@/components/Filter'
import React from 'react'

const Page = () => {
  return (
    <div><Filter options={
      [
        { id: '1', value: 'test' },
        { id: '2', value: 'test2' },
        { id: '3', value: 'test3' },
        { id: '4', value: 'test4' },
        { id: '5', value: 'test5' },
      ]
    } />
      <Filter options={
        [
          { id: '1', value: 'test' },
          { id: '2', value: 'test2' },
          { id: '3', value: 'test3' },
          { id: '4', value: 'test4' },
          { id: '5', value: 'test5' },
        ]
      } />
      <Filter options={
        [
          { id: '1', value: 'test' },
          { id: '2', value: 'test2' },
          { id: '3', value: 'test3' },
          { id: '4', value: 'test4' },
          { id: '5', value: 'test5' },
        ]
      } />
      <Filter options={
        [
          { id: '1', value: 'test' },
          { id: '2', value: 'test2' },
          { id: '3', value: 'test3' },
          { id: '4', value: 'test4' },
          { id: '5', value: 'test5' },
        ]
      } /></div>
  )
}

export default Page