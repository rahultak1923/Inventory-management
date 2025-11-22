import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const [user, setUser]=useState(null)
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      fetch("http://localhost:8000/user/getuser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "auth-token":token
        }
        })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error("Error fetching user:", err))
      }
  },[]);

  const handleLogout = ()=> {
      localStorage.removeItem("token");
      window.location.href = "/login"
  }
  return (
<>

      <main class="main-content  position-relative border-radius-lg " style={{marginLeft: "17.125rem"}}>
      <nav class="navbar navbar-main navbar-expand-lg custom-navbar " id="navbarBlur">
  <div class="container-fluid py-1 px-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb custom-breadcrumb">
        <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
        {/* <li class="breadcrumb-item " aria-current="page">HTML Code</li> */}
      </ol>
      <h6 class="dashboard-title">HTML</h6>
    </nav>
    
    <div class="collapse navbar-collapse justify-content-end" id="navbar">
      <div class="search-container">
      {isLoggedIn && user && (
      <span className='navbar-text me-3 text-white'>
       ({user.email})
      </span>
    )}
        <div class="input-group mx-2">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input type="text" class="form-control" placeholder="Type here..."/>
        </div>
        {!isLoggedIn ? (<>
            <Link class="btn btn-success mx-1"style={{ marginBottom: "0px" }}  to="/login">Login</Link>
            <Link class="btn btn-primary mx-1" style={{ marginBottom: "0px" }} to="/register">Register</Link>
        </>):(<>
            <button class="btn btn-danger mx-1" style={{ marginBottom: "0px" }} onClick={handleLogout}>Logout</button>
        
        </>)}
      </div>

      {/* <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a href="javascript:;" class="nav-link sign-in-link">
            <i class="fa fa-user"></i> <span class="d-sm-inline d-none">Sign In</span>
          </a>
        </li>
        <li class="nav-item d-xl-none">
          <a href="javascript:;" class="nav-link sidenav-toggler" id="iconNavbarSidenav">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;" class="nav-link settings-link">
            <i class="fa fa-cog"></i>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link notification-link" id="dropdownMenuButton" data-bs-toggle="dropdown">
            <i class="fa fa-bell"></i>
          </a>
          <ul class="dropdown-menu notification-dropdown" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">New message from Laur</a></li>
            <li><a class="dropdown-item" href="#">New album by Travis Scott</a></li>
            <li><a class="dropdown-item" href="#">Payment successfully completed</a></li>
          </ul>
        </li>
      </ul> */}
    </div>
  </div>
</nav>
    {/* <div class="container-fluid py-4">
    <div class="row">
  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Total's Jewellery</p>
              <h5 class="card-value">78</h5>
              <p class="card-status">
                <span class="text-success">+55%</span> since yesterday
              </p>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box primary">
              <i class="ni ni-money-coins"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Today's Users</p>
              <h5 class="card-value">2,300</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box danger">
              <i class="ni ni-world"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">New Clients</p>
              <h5 class="card-value">+3,462</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box success">
              <i class="ni ni-paper-diploma"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Sales</p>
              <h5 class="card-value">$103,430</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box warning">
              <i class="ni ni-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



     
    </div> */}
  </main>

</>
   
  )
}

export default Main
