import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import{Login}from './components/login/login.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import Amazon from './components/Amazon/Amazon.jsx';
import Databinding from './components/DataBinding1/databinding.jsx';
import { FackStore } from './components/FackStore.jsx';
import {Nasa}from './components/NasaAPI/Nasa.jsx';
import {JsonPlaceholder}from './components/Jsonplaceholder/JsonPlaceholder.jsx';
import {Styledemo}from './components/Style/style-demo.jsx';
import {EventDemo} from './components/Demo-app/event-demo.jsx';
import{EventDemo1}from './components/eventDemo1/eventdemo1.jsx';
import{EventDemo2}from './components/eventDemo2/eventdemo2.jsx';
import { MouseDemo } from './mouseDemo/mouseDemo.jsx';
import{EmiCalculator}from './components/Emi-calculator.jsx';
import{DebounceDemo}from './components/Debounce-demo.jsx';
import{ThrottelDemo}from './components/Throttel-demo.jsx';
import{ShoppingIndex}from './Shopping/Shopping-index.jsx';
import { ShoppingProducts } from './Shopping/shopping-product.jsx';
import {VideoHome}from './video_library_app/video_home.jsx';
import{VideoIndex}from './video_library_app/video_index.jsx';

createRoot(document.getElementById('root')).render(
  
    < ShoppingIndex/>
  
)
