import { Component, ErrorInfo, ReactElement } from "react";


interface Props{
    children: ReactElement
}
interface State {
    hasError: boolean;
} 

class ErrorBoundary extends Component<Props, State>{
    public state: State = {
        hasError:false
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
  }
    public render() {
        if (this.state.hasError) {
          return (
            <>
              <h4>Oops...</h4>
              <p>
                Something went wrong, Please refresh or check your internet
                connection
              </p>
           ;
           </>
          )
        }
    
        return this.props.children;
      }
    }


export default ErrorBoundary