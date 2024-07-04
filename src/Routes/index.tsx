import { FunctionComponent, Suspense } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Routes as BrowserRoutes, BrowserRouter, Route } from "react-router-dom";
import { BASE_ROUTES } from "../Constants/baseRoutes"; 
import Loader from "../Components/UI/Loader";


const Routes: FunctionComponent<Record<string, any>> = () => {
    return(
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <BrowserRouter basename="/">
                    <BrowserRoutes>
                        {BASE_ROUTES.map(({useAuth, path, Component, Layout }) => (
                            <Route 
                                path={path}
                                Component={Component}
                                element = {
                                    Layout ? (
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    ) : (
                                        <Component />
                                    )
                                }
                                />
                           ))

                        }
                    </BrowserRoutes>
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    )
}

export default Routes