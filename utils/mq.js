import {
	useDisplay
} from 'vuetify'
export default function (mq) {
	const {
		xs,
		sm,
		md,
		lg,
		xl,
		xxl,
		smAndDown,
		smAndUp,
		mdAndDown,
		mdAndUp,
		lgAndDown,
		lgAndUp,
		xlAndDown,
		xlAndUp,
	} = useDisplay()
	var res;
	if(mq == 'xs'){res = xs}
	if(mq == 'sm'){res = sm}
	if(mq == 'md'){res = md}
	if(mq == 'lg'){res = lg}
	if(mq == 'xl'){res = xl}
	if(mq == 'xxl'){res = xxl}
	if(mq == 'smAndDown'){res = smAndDown}
	if(mq == 'smAndUp'){res = smAndUp}
	if(mq == 'mdAndDown'){res = mdAndDown}
	if(mq == 'mdAndUp'){res = mdAndUp}
	if(mq == 'lgAndDown'){res = lgAndDown}
	if(mq == 'lgAndUp'){res = lgAndUp}
	if(mq == 'xlAndDown'){res = xlAndDown}
	if (mq == 'xlAndUp') { res = xlAndUp }
	return res.value
}
