import React from 'react';
import FallBack from './FallBack';
import VendorLayout from '../VendorLayout';

interface Props {}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <VendorLayout title="Oops!">
          <FallBack />
        </VendorLayout>
      );
    }

    return this.props.children;
  }
}
