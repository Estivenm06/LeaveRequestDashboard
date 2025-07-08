# Leave Request Dashboard

A modern, responsive leave request management dashboard built with React and Next.js, featuring UI5 components for an enhanced user experience.

## Features

- **Dynamic Data Display**: Interactive table for displaying leave requests with real-time updates
- **Pagination**: Smooth navigation through large datasets with customizable page sizes
- **Responsive Design**: Optimized for desktop and mobile viewing
- **UI5 Integration**: Professional UI components for enterprise-grade user experience
- **Customizable Interface**: Flexible header and data row configurations

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **pnpm** package manager

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leave-request-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Access the application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Testing

Run the test suite to ensure everything is working correctly:

```bash
# Install dependencies (if not already done)
pnpm install

# Run all tests
pnpm test
```

Tests are located in the `__tests__` directory and cover component functionality and integration scenarios.

## UI5 Components

This project leverages the following UI5 components for a professional user interface:

| Component | Purpose |
|-----------|---------|
| **Table** | Displays leave request data in a structured format |
| **Pagination** | Enables navigation through multiple pages of data |
| **HeaderRow** | Defines customizable table column headers |
| **Row** | Renders individual data rows with formatting |

## Project Structure

```
leave-request-dashboard/
├── src/
│   │── app/                # React components
│       ├── lib/            # data and definitions
│       │─── ui/            # User Interface of the dashboard and fonts 
│       ├── __tests__/      # Test files
└── package.json            # Project dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
