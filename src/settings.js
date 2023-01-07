import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "26193b98cf06417e9591203be09717b9"
const token = "007eJxTYHi38ULsseVlE898FWoLbmeo9DyXGm13UUx5Ye5Hmc7HCnsUGIzMDC2NkywtktMMzEwMzVMtTS0NjQyMk1INLM0NzZMsGb12JjcEMjI8DLZnYmSAQBCfhSEoPz+XgQEAZNkesw=="

export const config = {mode : "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Room";