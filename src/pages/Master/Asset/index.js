
import React, { useEffect, useContext, lazy, Suspense } from "react";
import Layout from 'components/containers/Layout';
import useForms from 'components/UseForm';
import sampleJson from 'config/example'
import {Table} from 'components'
export default () => {
  const {handleToChangeFrom,form } = useForms();
  return (
    <Layout>
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Asset</h1>
          <div>
            { form ? 
            (<div>
              <div className="card">
                <div className="card-header">
                <div className="row">
                    <div className="col-12 col-xl-6">
                      <h5 className="card-title ">Asset From</h5>
                    </div>
                    <div className="col-12 col-xl-6 pt-12">
                      <button type="submit"  onClick ={handleToChangeFrom} className="btn btn-info floatR">Back to list </button>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Asset Name</label>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Asset Type</label>
                      <select className="form-control">
                        <option value="">Choose...</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Purchased on</label>
                      <input type="date" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Purchased Value </label>
                      <textarea  className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Depreciation Value</label>
                      <textarea  className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Purchased From</label>
                      <textarea  className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Current Value</label>
                      <textarea  className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Status</label>
                      <select className="form-control">
                        <option value="">Choose...</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>)
           :
            (<div>
              <div className="card">
                <div className="card-header">
                <div className="row">
                    <div className="col-12 col-xl-6">
                      <h5 className="card-title ">Asset List</h5>
                    </div>
                    <div className="col-12 col-xl-6 pt-12">
                      <button type="submit"  onClick ={handleToChangeFrom} className="btn btn-info floatR">Add New Data</button>
                    </div>
                  </div>
                </div>
                <div >
                <Table data ={sampleJson}/>
                </div>
              </div>
            </div>)
          }
          </div>
        </div>
      </main>
    </Layout>
  );
};


