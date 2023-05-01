import React from 'react'

const contact = () => {
  return (
    <div>
      <form action="/send-data-here" method="post" className='flex flex-col'>
  <label htmlFor="first">Name:</label>
  <input type="text" id="name" name="Name" className='border'/>
  <label htmlFor ="email">Email</label>
  <input type="email" id="email" name="email" className='border' />
  <textarea placeholder='Enter message' className='border'></textarea>
  <button type="submit">Submit</button>
</form> 
    </div>
  )
}

export default contact