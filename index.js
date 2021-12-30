// Add your Circle class here

class Circle  {
    constructor(radius) {
      this.radius = radius;
    }

    get diameter() {
      return this.radius * 2;
        }

    set diameter (diameter) {
        this.radius = diameter / 2
      }

    get circumference() {
    return (this.radius * 2) * Math.PI;
        }
    
    set circumference (circumference) {
        this.radius = circumference / (2 * Math.PI)
        }
  
    get area() {
        return (this.radius * this.radius) * Math.PI;
          }
    

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI) ;
  }
}

  
//   let daffy = new Bird('Daffy');
//   daffy.speak; // => 'Daffy says squawk'
//   daffy.phrase = "it's rabbit season!";
//   daffy.speak; // => 'Daffy says it's rabbit season!'


//   First, let's create a class of Circle
// Circle will accept 1 parameter, radius, and use this.radius to store the value
// Use Math.PI to get an accurate measurement of pi (π)

// Define getter methods for diameter, circumference, and area which will calculate
//  each value using this.radius and pi
// Define setter methods for diameter, circumference, and area which will accept values 
// for each calculation, calculate the radius based on the input value and set this.radius accordingly

// Hints:
// You will need to use Math.sqrt() in your area setter method
// Recall that our Circle class only has one parameter: radius. This is because all of the 
// other values can be calculated from the radius, so there's no reason to store them separately. 
// What this means is that, for the setter methods for diameter, circumference and area, you will 
// need to calculate the new value for radius by "reverse engineering" the appropriate formula, 
// then set the Circle instance's radius to this new value. This will effectively set the other 
// measurements as well, since they are derived from the radius.
// For reference, here are the formulas for calculating diameter, circumference and area:

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2
// Don't forget about PEMDAS!

// All instances of Circle should be able to calculate the diameter, circumference, and area based 
// on the given radius. All instances should also be able to set this.radius by setting a value to 
// diameter, circumference, or area.