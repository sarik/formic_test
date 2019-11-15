import React, { useState } from 'react';
import { Form, Field } from 'formik';
import './App.css';
import './custom.css';
import './static/scss/index.scss';

//const [t, useT] = useState("");

function Ap({
  values,
  handleChange,
  setFieldValue,
  setFieldTouched,
  touched,
  close,
  isSubmitting,
  isValid,
  errors


}) {

  return (
    <div>
      {/*  <textarea value={t} onChange={e => useT(e.target.value)} /> 
      <div dangerouslySetInnerHTML={{ _html: t }} />
      <div >{t}</div>>*/}

<div style = {{alignContent:'center'}}>

      <Form className="modal-container border-10">
        <div className="modal-header pb-1">
          <span onClick={close} className="btn btn-clear float-right" aria-label="Close">
            {''}
          </span>
          <div className="modal-title h3 text-grey text-center">
            <strong>Import Record</strong>
          </div>
        </div>
        <div className="modal-body">
          <div className="columns">
            <div className="column col-10 col-mx-auto mb-4 text-center">
             {/*  <div className="column col-10 col-mx-auto mb-4 text-center">
                <em>
                  Please add the genetic files and metadata in a CSV. If you
                  need help on organising the metadata{' '}
                  <a href="https://docs.google.com/spreadsheets/d/1-VjDiL7GHww44avruR4wTuj0AtIIIyBXI6-brhCZU2Q/edit#gid=0" target="_blank" rel="noopener noreferrer"> click here </a> for our template on how to
                  prepare the file
                </em>
              </div> */}

              <div className="column col-10 col-mx-auto mb-4 text-center">
                <input type="text" name="email" placeholder="email" value={values.email}
                 error={errors.email} onChange = {e => {handleChange(e)}}
                
                  /> {errors.email}
                 <button
                  
                  
                  disabled={isSubmitting || !isValid} 
                 
                  type="submit"
                >
                  Next
                </button>
              </div>

             

<div className="column col-10 col-mx-auto mb-4 text-center">
     <Field type="password" name="password" placeholder="password" />
     </div>

     <div className="column col-10 col-mx-auto mb-4 text-center">
              <Field type="text" name="pp" placeholder="password" />
              </div>

              <div className="column col-10 col-mx-auto mb-4 text-center"></div>
              <input type="text"
                value={values.email} name="email"
                error={errors.password}
                onChange={(e) => {
                  console.log('cja', e.currentTarget.value);
                  handleChange(e);
                  setFieldValue("pp", e.currentTarget.value)
                  setFieldValue("sel", e.currentTarget.value)
                }
                } />
                </div>

                <div className="column col-10 col-mx-auto mb-4 text-center">
              <Field type="checkbox" name="checkbox" />
              </div>

              <div className="column col-10 col-mx-auto mb-4 text-center">
              <select name="selw"
                onChange={(e) => {
                  console.log('cja', e.currentTarget.value);
                  handleChange(e);
                  setFieldValue("pp", e.currentTarget.value)
                  setFieldValue("sel", e.currentTarget.value)
                }
                }
              >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
</div>
      
<div className="column col-10 col-mx-auto mb-4 text-center">
          <select name="sel"
                onChange={handleChange}

                value={values.sel}
              >
                >
      <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
              

            
            </div>  </div>  </div>
      </Form>
    </div>
    </div>
  );
}

export default Ap;
