import React from 'react';

import RenderListRoutes from '_Shared/RenderListRoutes';
import { PermissionsList } from '_Constants/ListRoutes';

const Permissions = () => {
    return (
        <RenderListRoutes
            headerTitle="Permissions"
            routesArr={PermissionsList}
        />
    );
};

export default Permissions;
