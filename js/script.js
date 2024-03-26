// Created by: Fetuha
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateVolumeOfPyramid() {
  // input
  const baseLength = parseInt(document.getElementById('base-length').value)
  const baseWidth = parseInt(document.getElementById('base-width').value)
  const heighOfPyramid = parseInt(document.getElementById('height').value)

  // process
  const volumeOfPyramid = (baseLength * baseWidth * heighOfPyramid ) * 0.5

  // output
  document.getElementById("volume").innerHTML = 'Volume is: ' + volumeOfPyramid + ' cm'
}