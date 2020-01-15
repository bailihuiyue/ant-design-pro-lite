import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you do not have permission."
    extra={
      <Button type="primary">
        Back
      </Button>
    }
  />
);

export default NoFoundPage;
