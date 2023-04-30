import React from "react";
import { useParams } from "react-router-dom";

export type WithRouterProps = {
  params: Record<string, string>;
};

export const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const params = useParams();

    return (
      <Component
        {...(props as Props)}
        params={params}
      />
    );
  };
};