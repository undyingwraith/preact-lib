import React from "preact/compat";
import { Banner } from "../atoms";

interface IState {
  hasError: boolean;
  error: Error | undefined;
}

export class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error: any, info: any) {
    const message = 'Error boundary caught an error.';
    console.log(`${message} error: ${JSON.stringify(error)} info: ${JSON.stringify(info)}`);
  }

  render() {
    if (this.state.hasError) {
      return (
		<Banner>
			<p><b>{this.state.error?.name}</b>: {this.state.error?.message}</p>
			<code>{this.state.error?.stack}</code>
		</Banner>
      );
    }

    return this.props.children;
  }
}
