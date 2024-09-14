const urls = [
  'https://olademar-backend-test.s3.us-east-2.amazonaws.com/e701ad1d-1d15-4c4f-ba0e-72ed63f1f83b-imagen%203.jpg',
  'https://olademar-backend-test.s3.us-east-2.amazonaws.com/a7a3cdf0-95b6-4259-b901-a3c350a19419-imagen%202.jpg',
  'https://olademar-backend-test.s3.us-east-2.amazonaws.com/dc8aa725-4909-4551-be1b-b43adef837a8-imagen%204.jpg',
];

const toRemove = [
  'https://olademar-backend-test.s3.us-east-2.amazonaws.com/a7a3cdf0-95b6-4259-b901-a3c350a19419-imagen%202.jpg',
];

const updatedUrls = urls.filter((url) => !toRemove.includes(url));

console.log(updatedUrls);
