
/*
 * @Author: zhou.l
 * @Date: 2021-05-31 17:36:42
 * @LastEditTime: 2021-05-31 17:41:30
 * @LastEditors: Please set LastEditors
 * @Description: 促销中心的配置文件
 * @FilePath: /burgeon-project-logic/js/pages/promotionCenter/promotionConfig.config.js
 */

const columns = [
	{
		title: ' ',
		type: 'index',
		align: 'center',
	},
	{
		align: 'center',
		// tdAlign: 'left',
		title: '友情文档',
		key: 'name',
		render: (h, params) => h(
			'a',
			{
				attrs: {
					href: params.row.href,
					target: "_blank"
				}
				/* on: {
					click: () => {
						const index = params.index;
						// this.tableConfig.data.splice(index, 1);
					}
				} */
			},
			// "删除"
			params.row.name
			// $i18n.t('btn.delete')
		)
	},
];

const data = [
	{
		name: '产品主题布局规范文档',
		href: 'http://share.ark.burgeononline.com/repository/entryComponents/2/908030/2/2061/P',
	},
	{
		name: 'omsUtils',
		href: 'http://share.ark.burgeononline.com/repository/entryComponents/2/907859/2/2061/P',
	},
	{
		name: 'business-components使用文档',
		href: 'http://share.ark.burgeononline.com/repository/entryComponents/2/907855/2/2061/P',
	},
	{
		name: 'project-logic使用文档',
		href: 'http://share.ark.burgeononline.com/repository/entryComponents/2/63456/2/2061/P',
	},
	{
		name: '树结构配置',
		href: 'http://share.ark.burgeononline.com/repository/entryComponents/2/908055/1/2061/P',
	},
]

const columnsKey = [
	{
		title: ' ',
		type: 'index',
		align: 'center',
	},
	{
		align: 'center',
		// tdAlign: 'left',
		title: 'KEY (范围)',
		key: 'key',
	},
	{
		align: 'center',
		// tdAlign: 'left',
		title: '所属对象',
		key: 'obj',
	},
];

const dataKey = [
	{
		key: '任意未被使用的字符串',
		obj: 'common',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'other',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'btn',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'pHolder',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'panel_label',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'form_label',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'table_label',
	},
	{
		key: '任意未被使用的字符串',
		obj: 'modalTitle',
	},
	{
		key: '任意未被使用的字符串 | gc ~ gz',
		obj: 'modalTips',
	},
]

export {
	columnsKey,
	dataKey,
	columns,
	data,
}