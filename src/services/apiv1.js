import { request } from 'umi';

export async function postCoreSettingAPI(params) {
  return request('/api/v1/core/setting/', {
    method: 'POST',
    data: params,
  });
}

export async function getCoreSettingAPI(params) {
  return request('/api/v1/core/setting/', {
    params,
  });
}

export async function getServiceStatusAPI(params) {
  return request('/api/v1/msgrpc/servicestatus/', {
    params,
  });
}

export async function getMsgrpcHandlerAPI(params) {
  return request('/api/v1/msgrpc/handler/', {
    params,
  });
}

export async function postMsgrpcHandlerAPI(params) {
  return request('/api/v1/msgrpc/handler/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcHandlerAPI(params) {
  return request('/api/v1/msgrpc/handler/', {
    method: 'DELETE',
    params,
  });
}

export async function postMsgrpcPayloadAPI(params) {
  return request('/api/v1/msgrpc/payload/', {
    method: 'POST',
    data: params,
  });
}

export async function getCoreHostAPI(params) {
  return request('/api/v1/core/host/', {
    params,
  });
}

export async function putCoreHostAPI(params) {
  return request('/api/v1/core/host/', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteCoreHostAPI(params) {
  return request('/api/v1/core/host/', {
    method: 'DELETE',
    data: params,
  });
}

export async function getMsgrpcFileMsfAPI(params) {
  return request('/api/v1/msgrpc/filemsf/', {
    params,
  });
}

export async function postMsgrpcFileMsfAPI(params) {
  return request('/api/v1/msgrpc/filemsf/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcFileMsfAPI(params) {
  return request('/api/v1/msgrpc/filemsf/', {
    method: 'DELETE',
    params,
  });
}

export async function getPostlateralCredentialAPI(params) {
  return request('/api/v1/postlateral/credential/', {
    params,
  });
}

export async function putPostlateralCredentialAPI(params) {
  return request('/api/v1/postlateral/credential/', {
    method: 'PUT',
    data: params,
  });
}

export async function postPostlateralCredentialAPI(params) {
  return request('/api/v1/postlateral/credential/', {
    method: 'POST',
    data: params,
  });
}

export async function deletePostlateralCredentialAPI(params) {
  return request('/api/v1/postlateral/credential/', {
    method: 'DELETE',
    params,
  });
}


export async function getMsgrpcSocksAPI(params) {
  return request('/api/v1/msgrpc/socks/', {
    params,
  });
}

export async function postMsgrpcSocksAPI(params) {
  return request('/api/v1/msgrpc/socks/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcSocksAPI(params) {
  return request('/api/v1/msgrpc/socks/', {
    method: 'DELETE',
    params,
  });
}


export async function getMsgrpcPortFwdAPI(params) {
  return request('/api/v1/msgrpc/portfwd/', {
    params,
  });
}

export async function postMsgrpcPortFwdAPI(params) {
  return request('/api/v1/msgrpc/portfwd/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcPortFwdAPI(params) {
  return request('/api/v1/msgrpc/portfwd/', {
    method: 'DELETE',
    params,
  });
}

export async function getMsgrpcRouteAPI(params) {
  return request('/api/v1/msgrpc/route/', {
    params,
  });
}

export async function postMsgrpcRouteAPI(params) {
  return request('/api/v1/msgrpc/route/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcRouteAPI(params) {
  return request('/api/v1/msgrpc/route/', {
    method: 'DELETE',
    params,
  });
}

export async function getMsgrpcLazyLoaderAPI(params) {
  return request('/api/v1/msgrpc/lazyloader/', {
    params,
  });
}

export async function putMsgrpcLazyLoaderAPI(params) {
  return request('/api/v1/msgrpc/lazyloader/', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteMsgrpcLazyLoaderAPI(params) {
  return request('/api/v1/msgrpc/lazyloader/', {
    method: 'DELETE',
    params,
  });
}

export async function postCoreBaseauthAPI(params) {
  return request('/api/v1/core/baseauth/', {
    method: 'POST',
    data: params,
  });
}

export async function postMsgrpcSessionioAPI(params) {
  return request('/api/v1/msgrpc/sessionio/', {
    method: 'POST',
    data: params,
  });
}

export async function putMsgrpcSessionioAPI(params) {
  return request('/api/v1/msgrpc/sessionio/', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteMsgrpcSessionioAPI(params) {
  return request('/api/v1/msgrpc/sessionio/', {
    method: 'DELETE',
    params,
  });
}

export async function getPostlateralPortserviceAPI(params) {
  return request('/api/v1/postlateral/portservice/', { params });
}

export async function deletePostlateralPortserviceAPI(params) {
  return request('/api/v1/postlateral/portservice/', {
    method: 'DELETE',
    params,
  });
}


export async function getPostmodulePostModuleConfigAPI(params) {
  return request('/api/v1/postmodule/postmoduleconfig/', { params });
}

export async function putPostmodulePostModuleConfigAPI(params) {
  return request('/api/v1/postmodule/postmoduleconfig/', {
    method: 'PUT',
    data: params,
  });
}

export async function getPostmodulePostModuleResultAPI(params) {
  return request('/api/v1/postmodule/postmoduleresult/', { params });
}

export async function deletePostmodulePostModuleResultHistoryAPI(params) {
  return request('/api/v1/postmodule/postmoduleresulthistory/', {
    method: 'DELETE',
    params,
  });
}

export async function postPostmodulePostModuleActuatorAPI(params) {
  return request('/api/v1/postmodule/postmoduleactuator/', {
    method: 'POST',
    data: params,
  });
}


export async function getCoreCurrentUserAPI(params) {
  return request('/api/v1/core/currentuser/', { params });
}

export async function getMsgrpcSessionUploadDownloadAPI(params) {
  return request('/api/v1/msgrpc/sessionuploaddownload/', { params });
}


export async function getPostlateralVulnerabilityAPI(params) {
  return request('/api/v1/postlateral/vulnerability/', { params });
}

export async function deletePostlateralVulnerabilityAPI(params) {
  return request('/api/v1/postlateral/vulnerability/', {
    method: 'DELETE',
    params,
  });
}

export async function getMsgrpcFileSessionAPI(params) {
  return request('/api/v1/msgrpc/filesession/', { params });
}

export async function putMsgrpcFileSessionAPI(params) {
  return request('/api/v1/msgrpc/filesession/', {
    method: 'PUT',
    data: params,
  });
}

export async function postMsgrpcFileSessionAPI(params) {
  return request('/api/v1/msgrpc/filesession/', {
    method: 'POST',
    data: params,
  });
}

export async function deleteMsgrpcFileSessionAPI(params) {
  return request('/api/v1/msgrpc/filesession/', {
    method: 'DELETE',
    params,
  });
}


export async function getMsgrpcSessionAPI(params) {
  return request('/api/v1/msgrpc/session/', { params });
}

export async function putMsgrpcSessionAPI(params) {
  return request('/api/v1/msgrpc/session/', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteMsgrpcSessionAPI(params) {
  return request('/api/v1/msgrpc/session/', {
    method: 'DELETE',
    params,
  });
}


export async function getMsgrpcTransportAPI(params) {
  return request('/api/v1/msgrpc/transport/', { params });
}

export async function postMsgrpcTransportAPI(params) {
  return request('/api/v1/msgrpc/transport/', {
    method: 'POST',
    data: params,
  });
}

export async function putMsgrpcTransportAPI(params) {
  return request('/api/v1/msgrpc/transport/', {
    method: 'PUT',
    data: params,
  });
}

export async function deleteMsgrpcTransportAPI(params) {
  return request('/api/v1/msgrpc/transport/', {
    method: 'DELETE',
    params,
  });
}

export async function getCoreNetworkTopologyAPI(params) {
  return request('/api/v1/core/networktopology/', { params });
}

export async function getCoreNetworkSearchAPI(params) {
  return request('/api/v1/core/networksearch/', { params });
}

export async function deleteMsgrpcJobAPI(params) {
  return request('/api/v1/msgrpc/job/', {
    method: 'DELETE',
    params,
  });
}

export async function deleteNoticesAPI(params) {
  return request('/api/v1/core/notices/', {
    method: 'DELETE',
    params,
  });
}

export async function postCoreNoticesAPI(params) {
  return request('/api/v1/core/notices/', {
    method: 'POST',
    data: params,
  });
}


export async function getPostModuleAutoAPI(params) {
  return request('/api/v1/postmodule/postmoduleauto/', {
    params,
  });
}

export async function postPostModuleAutoAPI(params) {
  return request('/api/v1/postmodule/postmoduleauto/', {
    method: 'POST',
    data: params,
  });
}

export async function deletePostModuleAutoAPI(params) {
  return request('/api/v1/postmodule/postmoduleauto/', {
    method: 'DELETE',
    params,
  });
}


