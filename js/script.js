// Created by: Fetuha
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-length').value)
  const heightOfTriangle = parseInt(document.getElementById('base-width').value)
  const heighOfTriangle = parseInt(document.getElementById('height').value)

  // process
  const areaOfTriangle = (baseOfTriangle * heightOfTriangle) * 0.5

  // output
  document.getElementById("area").innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}