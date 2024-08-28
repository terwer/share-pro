/*
 *            GNU GENERAL PUBLIC LICENSE
 *               Version 3, 29 June 2007
 *
 *  Copyright (C) 2022-2024 Terwer, Inc. <https://terwer.space/>
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 */

export const workspaceDir = `${(window as any).siyuan.config.system.workspaceDir}`
export const dataDir = `${(window as any).siyuan.config.system.dataDir}`
export const isDev = process.env.DEV_MODE === "true"
export const siyuanApiToken = ""
export const siyuanApiUrl = "http://127.0.0.1"
export const SHARE_PRO_STORE_NAME = "share-pro.json"
export const SHARE_SERVICE_ENDPOINT_DEV = "http://localhost:8000"
export const SHARE_SERVICE_ENDPOINT_PROD = "https://share.service.terwergreen.com:8888"
