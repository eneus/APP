import React from 'react'
import { useHistory } from 'react-router-dom'
import { NotFound } from 'components/SVG'

export default function NotFoundPage () {
  const history = useHistory()
  return (
    <div 
      className="new-project-dialog">
      <div>
          <div centered>
            <div>
              <NotFound />
              <h2>404</h2>
              <div>Sorry, the page you visited does not exist.</div>
              <button onClick={() => history.push('/')}  className="btn blue">
                Back Home
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}
