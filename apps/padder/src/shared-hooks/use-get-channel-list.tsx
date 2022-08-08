import { GetChannelList } from "../lib/plugins/plugin-manager"
import { useGetQuery } from "./use-get-generic"

export const useGetChannelList = () => {
	return useGetQuery(GetChannelList)
}
