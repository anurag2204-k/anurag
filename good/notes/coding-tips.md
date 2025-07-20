# Coding Tips & Tricks 🛠️

Collection of useful coding tips and best practices.

## JavaScript Tips

### Array Methods
```javascript
// Use map for transformations
const doubled = numbers.map(n => n * 2);

// Use filter for conditional selection
const evens = numbers.filter(n => n % 2 === 0);

// Use reduce for aggregations
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Modern ES6+ Features
```javascript
// Destructuring
const { name, age } = person;
const [first, second] = array;

// Template literals
const message = `Hello ${name}, you are ${age} years old`;

// Arrow functions
const add = (a, b) => a + b;

// Spread operator
const combined = [...array1, ...array2];
```

## React Best Practices

### Component Organization
- Keep components small and focused
- Use custom hooks for reusable logic
- Implement proper error boundaries
- Use React.memo for performance optimization

### State Management
```javascript
// Use useReducer for complex state
const [state, dispatch] = useReducer(reducer, initialState);

// Use useCallback for function memoization
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## CSS Tips

### Flexbox Layout
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
```

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

## Performance Tips

1. **Lazy Loading** - Use React.lazy() for code splitting
2. **Image Optimization** - Use proper formats (WebP, AVIF)
3. **Bundle Analysis** - Analyze and optimize bundle size
4. **Caching** - Implement proper caching strategies

Remember: *"Premature optimization is the root of all evil"* - Donald Knuth

Keep learning and coding! 💪
