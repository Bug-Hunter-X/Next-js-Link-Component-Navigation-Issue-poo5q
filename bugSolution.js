```javascript
// next.config.js
module.exports = {
  basePath: '/my-nextjs-app', // Or your desired base path
}

// bug.js (remains the same)
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>    
    </div>
  );
}

export default MyComponent; 
```