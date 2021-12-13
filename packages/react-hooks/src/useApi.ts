// Copyright 2017-2021 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiProps } from '@polkadot/react-api-context/types';

import { useContext } from 'react';

import ApiContext from '@polkadot/react-api-context/ApiContext';

import { createNamedHook } from './createNamedHook';

function useApiImpl (): ApiProps {
  return useContext(ApiContext);
}

export const useApi = createNamedHook('useApi', useApiImpl);
