// Define the interfaces with brand properties
interface MajorCredits {
    credits: number;
    brand: 'major';  // Unique brand for MajorCredits
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor';  // Unique brand for MinorCredits
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major', // Brand to indicate MajorCredits
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor', // Brand to indicate MinorCredits
    };
  }
  
  // Example usage of the interfaces and functions
  const major1: MajorCredits = { credits: 5, brand: 'major' };
  const major2: MajorCredits = { credits: 3, brand: 'major' };
  
  const minor1: MinorCredits = { credits: 2, brand: 'minor' };
  const minor2: MinorCredits = { credits: 1, brand: 'minor' };
  
  const totalMajorCredits = sumMajorCredits(major1, major2);
  const totalMinorCredits = sumMinorCredits(minor1, minor2);
  
  console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
  console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
  