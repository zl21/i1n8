export default { // 弹窗提示、警告
	/**
	 * 未使用的编码代号：da ~ wz、xb ~ xz
	 *  */
	a0: '是否保存已经修改的数据', //是否保存已经修改的数据？ ,Do you want to save the modified data?
	a1: '请先选择需要复制的订单',
	a2: '订单只能是原单才能复制!',
	a3: '非已取消或系统作废订单，不允许复制',
	a4: '只能对【仓库发货，平台发货】订单状态的原单进行复制操作',
	a5: '请选择一条需要复制的订单！',
	a6: '请选择需要审核的记录！',
	a7: '请选择需要开票的订单',
	a8: '请选择一条订单',
	a9: '请选择需要取消的订单！',
	aa: '省市信息必填!',
	ab: '收货人姓名不合法，请重新填写！',
	ac: '收货人必填!',
	ad: '收货人手机必填!',
	ae: '电话号码不合法，请重新填写！',
	af: '收货人地址必填!',
	ag: '退货明细必须有行数据！',
	ah: '换货明细必须有行数据！',
	ai: '换货金额必须等于退货金额！',
	aj: '退货总金额不能小于0，请修改后重新保存！',
	ak: '请输入正确的换货邮费!',
	al: '退货明细数量不能为0！',
	am: '退货明细颜色不能为空！',
	an: '退货明细尺码不能为空！',
	ao: '退货明细条码不能为空！',
	ap: '换货明细换货数量不能为空',
	aq: '换货明细颜色不能为空',
	ar: '换货明细尺码不能为空',
	as: '换货明细条码不能为空',
	at: '可用库存查询失败',
	au: '新增退换货订单失败!',
	av: '申请数量与入库数量不一致，是否确定售后审核？',
	aw: '请选择一条需要删除的明细!',
	ax: '不允许批量删除明细!',
	ay: '删除成功!',
	az: '原始平台单号存在多条记录，请用订单编号查询！',
	b0: '请选择需要拦截的记录！',
	b1: '交易平台为当当，唯品会jitx，京东（货到付款）的订单不允许拆单',
	b2: '拦截、退款中的订单不允许拆单！',
	b3: '只允许拆分待审核和缺货状态的订单！',
	b4: '一次只能对一个订单进行拆分！',
	b5: '请选择需要新增退单记录！',
	b6: '请选择一条记录！',
	b7: '订单需要生成退换货单的订单状态不能已取消、系统作废！',
	b8: '订单需要发货后才能新增退单!',
	b9: '请选择需要缺货重新占单的记录！',
	ba: '未查询到数据！',
	bb: '查询不到数据！',
	bc: '请选择一条数据！',
	bd: '只能选择一条订单记录!',
	be: '请选择需要下载的店铺',
	bf: '商品ID和时间必填其中一个',
	bg: '请输入需要下载的店铺!',
	bh: '账单时间账单编码不能同时为空!',
	bi: '账单时间不能为空',
	bj: '账单时间不能跨月',
	bk: '账单时间段天数要小于等于11天',
	bl: '供应商ID不能为空!',
	bm: '账单编码不能为空',
	bn: '订单下载任务已经发送，任务ID：',
	bo: '，请前往接口下载任务表查看下载进度！',
	bp: '请选择输入日期或输入订单编号',
	bq: '修改时间、商品PID、商品编码必填其一',
	br: '请选择需要下载的查询时间',
	bs: '请选择输入的日期或输入订单编号',
	bt: '店铺和平台时间不能为空',
	bu: '换单修改时间和换单单号不能同时为空',
	bv: '退单修改时间和退单单号不能同时为空',
	bw: '请输入平台时间或退供单号',
	bx: '请输入需要下载的数字编号或修改时间中的一个',
	by: '是否确认同步库存？',
	bz: '是否打印选中行？',
	c0: '请选择需要福袋缺货重新占单的记录！',
	c1: '请选择需要更改为平台发货的记录！',
	c2: '请选择需要批量退单的记录！',
	c3: '选择的订单中存在非待审核订单, 不允许释放库存！',
	c4: '是否确定将选择的订单占用的库存释放？',
	c5: '请选择需要库存释放的订单！',
	c6: '请选择需要修改物流记录！',
	c7: '请选择需要修改发货仓库记录！',
	c8: '请选择需要修改备注的记录！',
	c9: '请选择需要定金预售提前发货的记录！',
	ca: '正在打印中，请稍后。。。',
	cb: '手工占单成功!',
	cc: '合并占单成功!',
	cd: '按页面已勾选订单',
	ce: '按筛选条件选中订单',
	cf: '商品SKU',
	cg: 'sku不能为空!',
	ch: '当前操作未确认拆单，是否确认刷新？',
	ci: '已是原始状态，不执行操作！',
	cj: '拆分数量不能大于待拆数量；不进行拆单！',
	ck: '查询失败！',
	cl: '请选择需要拆分的明细！',
	cm: '没有可拆分的订单！',
	cn: '拆分数量不能为0！',
	co: '请先选择拆单明细添加到待拆单，再进行拆单！',
	cp: '规则名称必填',
	cq: '规则类型必填',
	cr: '请先设置仓库',
	cs: '删除失败！',
	ct: '请选择要删除的明细',
	cu: '请先保存主表信息',
	cv: '仓库必填',
	cw: '仓库优先级必填必填',
	cx: '新增成功',
	cy: '新增失败',
	cz: '删除明细成功',
	d0: '请选择需要加急发货的记录！',
	d1: '请选择需要替换赠品的记录！',
	d2: '请选择需要添加赠品的记录！',
	d3: '请选择需要删除赠品的记录！',
	d4: '请选择需要拆单的记录！',
	d5: '请选择需要取消Hold单的记录！',
	d6: '服务器请求失败',
	d7: '请选择要合并的单据！',
	d8: '请选择需要操作的单据！',
	d9: '当前状态异常，不允许操作！',
	da: '修改折扣成功',
	db: '请维护折扣！',
	dc: '请维护价格！',
	dd: '匹配成功',
	de: '请输入数量',
	df: '请选择需要删除的数据',
	dg: '单条码新增成功',
	dh: '请先选择店仓',
	di: '顾客电话不合法！',
	dj: '请选择明细后再点击删除',
	dk: '创建日期不能为空',
	dl: '时间范围不能超过24小时',
	dm: '【平台条码id、条码、批次编码】不能同时为空！',
	dn: '平台商品ID不能为空！',
	do: '店铺不能为空！',
	dp: '条码不能为空！',
	dq: '请选择需要替换商品的记录！',
	dr: '不允许批量处理！',
	ds: '单据状态是取消状态不能修改卖家备注！',
	dt: '只有待售后审核状态的退单可以售后审核，请重新选择数据！',
	du: '数据加载中...',
	dv: '请选择一条需要替换的明细！',
	dw: '请选择一条订单明细！',
	dx: '数据加载失败！',
	dy: '此商品中不存在该颜色和尺寸！',
	dz: '只能一条订单明细！',
	e0: '是否确定取消订单？',
	e1: '是否确定取消Hold？',
	e2: '请选择需要Hold单的记录！',
	e3: '当前的操作会执行全量导出，导出时间可能会比较慢！是否继续导出？',
	e4: '将对查询出的订单数据重新分配快递，是否继续?',
	e5: '将对查询出的订单数据重新分配仓库，是否继续?',
	e6: '批量生成退换货订单，是否继续?',
	e7: '只有待审核的订单可以合并',
	e8: '要合并的单据的付款方式只能为非货到付款',
	e9: '要合并的单据的预售状态只能为非预售',
	ea: 'HOLD单成功',
	eb: '请选择需要更换的商品!',
	ec: '不可以选择更换当前商品！',
	ed: '请填写筛选条件!',
	ee: '入库实体仓库必填！',
	ef: '拒绝打款原因不能为空!',
	eg: '无赠品可添加！',
	eh: '档案日程归属不能为空!',
	ei: '请先选择一条数据更换吊牌！',
	ej: '非【缺货】状态，不能进行换吊牌操作！',
	ek: '请输入物流单号!',
	el: '请输入传WMS拣货单字段!',
	em: '物流公司必填!',
	en: '延期日期不能为空！',
	eo: '调整策略时间成功',
	ep: '点击了取消!',
	eq: '查询条件 <实体仓> <单据日期> <来源单据类型> 至少有一个不为空！',
	er: '成功！',
	es: '请填写分组名称！',
	et: '有重复优先级!',
	eu: '设置分组成功!',
	ev: '请选择需要反审核的记录！',
	ew: '只允许仓库发货、平台发货状态订单批量退单！',
	ex: 'JITX的订单不允许拆分！',
	ey: '手机号码必须为数字,请修改',
	ez: '手机位数不正确,请修改',
	f0: '要合并的单据的发货仓库只能为非空',
	f1: '合并订单成功',
	f2: '合并订单失败',
	f3: '取消合并订单成功',
	f4: '取消合并订单失败',
	f5: '请选择不超过80笔订单的数据！',
	f6: '订单需要生成退换货单的订单状态不能已取消、系统作废！',
	f7: '存在未发货订单,不能进行批量新增退换货订单操作！',
	f8: '有一项导出正在进行中',
	f9: '请填入完整信息,如:张三,17788888888,上海上海市闵行区黎安路999号',
	fa: '手机号不能为空！',
	fb: '手机号格式不正确！',
	fc: '收货人地址不能为空！',
	fd: '收货人地址格式不正确！',
	fe: '只有缺货状态订单允许缺货回传！',
	ff: '是否确定缺货回传订单！',
	fg: '只能选择一条商品记录！',
	fh: 'SKU编码不能为空!',
	fi: '请选择需要生成的维度!',
	fj: '请选择商品分类!',
	fk: '请选择需要添加的供应商!',
	fl: '该供应商已存在,请勿重复添加!',
	fm: '请选中需要批量应用的数据!',
	fn: '请选择物流单号',
	fo: '',
	fp: '',
	fq: '',
	fr: '',
	fs: '',
	ft: '',
	fu: '',
	fv: '',
	fw: '',
	fx: '',
	fy: '',
	fz: '',
	// ------------------------------------------------------------------------
	g0: '发货店仓，不能为空',
	g1: '订单存在非赠品的成交金额为0， 是否确定保存订单？',
	g2: '保存未成功',
	g3: '明细查询失败!',
	g4: '明细保存失败!',
	g5: '请输入条码!',
	g6: '不存在该条码！',
	g7: '是否确定反审核订单？',
	g8: '订单状态已审核，建议反审核再修改地址',
	g9: '订单状态非未确认、缺货、已审核、配货中，不允许修改地址',
	h0: '地址信息获取失败!',
	h1: '只有仓库发货或者平台发货的订单才能操作!',
	h2: '只允许仓库发货、平台发货状态订单允许新增退单!',
	h3: '订单详情获取失败',
	h4: '条码不在列表中,是否继续添加?',
	h5: '未能匹配相应的退换货单，是否继续?',
	h6: '您的浏览器不支持 audio 与元素。',
	h7: '退货入库单中存在此物流单号，不允许扫描入库！',
	h8: '必须填写物流单号才能强制保存',
	h9: '扫描数量不能为零！',
	i0: '退货批次不能为空!',
	i1: '销退入库仓不能为空!',
	i2: '强制入库失败',
	i3: '实收条码不能为空',
	i4: '实收条码与发出条码一致，请检查后重新扫描',
	i5: '本地条码档案中不存在此条码，请检查后重试',
	i6: '请先选择一行记录进行扫描',
	i7: '请选择一条数据！',
	i8: '请输入查询条件！',
	i9: "查询不到数据!",
	j0: '请输入正确的买家手机号',
	j1: '原始订单编号不能为空!',
	j2: '没有明细可新增',
	j3: '请选择需要删除的明细!',
	j4: '至少保留一条明细,不允许全部删除!',
	j5: '确定删除所选明细?',
	j6: '退款描述请求失败',
	j7: '亲，您好！您的订单号',
	j8: '因为',
	j9: '原因，给您申请',
	k0: '元的额外退款，我们将会在 3 个工作日之内给您打到您',
	k1: '中，请您注意查收！感谢您的惠顾，欢迎下次光临，祝您生活愉快！',
	k2: '当前的操作会执行手动入库，是否继续？',
	k3: '请选中一项修改!',
	k4: '此退换单状态不允许扫描入库,请重新选择!',
	k5: '当前选中行，无法使用此按钮!',
	k6: '单据状态不符合审核条件，请重新选择',
	k7: '是否确定售后审核？',
	k8: '售后审核成功！',
	k9: '售后审核失败！',
	l0: '请至少选中一项!',
	l1: '退换货取消失败,只有【等待退货入库】状态才可以操作取消，请检查后重试!',
	l2: '单据状态不符合取消条件，请重新选择',
	l3: '是否确定取消退单？',
	l4: '换货订单的状态为配货中或已经发货,是否确认直接取消退货？',
	l5: '取消失败！',
	l6: '此退换单状态不允许虚拟入库!',
	l7: '是否确定虚拟入库？',
	l8: '虚拟入库失败！',
	l9: '虚拟仓库入库失败！',
	m0: '取消自动退款失败！',
	m1: '请至少选中一项修改',
	m2: '取消状态不允许修改备注',
	m3: '是否确定批量原退？',
	m4: '批量原退失败！',
	m5: '只有等待退货入库状态可以从WMS撤回',
	m6: '从wms撤回失败！',
	m7: '重WMS失败！',
	m8: '只有等待售后确认状态可以强制完成!',
	m9: '是否确定强制完成？',
	n0: '强制完成失败！',
	n1: '请选中一条单据进行复制!',
	n2: '。是否继续？',
	n3: '请先填入原订单信息',
	n4: '省市区id获取失败',
	n5: '复制退单失败!',
	n6: '获取详情失败!',
	n7: '传WMS成功状态的单据不可修改！',
	n8: '只有等待退货入库和等待售后确认状态的单据 或 完成状态且虚拟入库未入库状态的单据可修改!',
	n9: '等待退货入库且传WMS成功状态的单据不可修改！',
	o0: '店铺名称不能为空!',
	p0: '作废操作失败',
	p1: '退货批次必填！',
	p2: '特殊处理类型必填！',
	p3: '退货入库明细不能为空！',
	p4: '请选择一条明细手工匹配',
	p5: '只能选择一条明细手工匹配',
	p6: '状态不匹配不能进入手动匹配',
	p7: '请选择一条明细错发强制匹配',
	p8: '只能选择一条明细错发强制匹配',
	p9: '状态不匹配不能进入错发强制匹配',
	q0: '选择的促销活动已经下线/过期',
	q1: '请选择一条数据进行复制操作',
	q2: '只能选取一条数据',
	q3: '选择的促销活动已经发布',
	q4: '请先勾选需要分组的促销',
	q5: '存在【下线过期】的促销，请重新选择',
	q6: '此退货入库单已经关闭匹配，不允许选择',
	q7: '此单据不可进行手工匹配操作',
	q8: '此单据不可进行错发强制匹配操作',
	q9: '作废操作成功',
	r0: '最大翻倍数未填写！',
	r1: '请先添加商品和赠品！',
	r2: '商品列表无数据',
	r3: '赠品列表无数据',
	r4: '获取促销详情异常',
	r5: '【满足条件】至少要选中一项并且填写数量或金额条件',
	r6: '无数据',
	r7: '批量导入解析出现问题',
	r8: '查询数据为空',
	r9: '请至少选择一个',
	s0: '收货省份未填写',
	s1: '商品列表数据不能为空',
	s2: '商品列表第',
	s3: '行数据未填写完毕',
	s4: '校验完成',
	s5: '活动名称未填写！',
	s6: '店铺名称未填写！',
	s7: '订单类型必选！',
	s8: '下线时间未填写！',
	s9: '最大限制次数未填写！',
	t0: '请选择要删除的条码！',
	t1: 'SKU存在明细,无法删除',
	t2: '请选择要删除的组合商品！',
	t3: '请先选择一条条码明细',
	t4: '分组只能录入正整数',
	t5: '试算成功！',
	t6: '店铺信息未填写',
	t7: '时间类型未填写',
	t8: '时间范围未填写',
	t9: '订单类型未填写',
	u0: '价格是一个数字，请合理输入',
	u1: '请选择虚拟仓库',
	u2: '请录入条码明细后再保存',
	u3: '虚拟条码没有设置商品，请先设置再保存。',
	u4: '福袋类型组合商品一个虚拟条码不允许存在超过十个分组',
	u5: '存在每组抽取行数大于每组福袋商品总行数',
	u6: '福袋类型组合商品不允许存在一个分组超过200行的SKU',
	u7: '普通类型组合商品，一个虚拟条码下不允许超过30条SKU',
	u8: '已提交的组合商品不能修改！',
	u9: '已提交的组合商品不能执行删除！',
	v0: '请选择一个正确的商品条码',
	v1: '商品数量不能为空！',
	v2: '商品数量是一个数字，请合理输入',
	v3: '分组不能为空！',
	v4: '分组是一个数字，请合理输入',
	v5: '请选择点击要录入商品明细的条码信息',
	v6: '商品编码不能为空',
	v7: '商品编码由英文字母和数字组成，请合理输入',
	v8: '请选择品牌',
	v9: '价格不能为空',
	w0: '商品数量只能录入正整数',
	w1: '每组抽取行数只能录入正整数',
	w2: '切换组合商品类型会清空数据，确认切换组合商品类型',
	w3: '无法修改',
	w4: '虚拟条码为必填项，不能为空',
	w5: '虚拟条码有英文字母和数字组成，请合理输入',
	w6: '每组抽取行数是一个数字，请合理输入',
	w7: '当前',
	w8: '已存在,不允许保存',
	w9: '商品条码不能为空！',
	x0: '实体仓不能为空',
	x1: '生效日期不能为空',
	x2: '结束日期不能为空',
	x3: '方案名称不能为空',
	x4: '明细为空不允许保存',
	x5: '赔付标准和倍数不能为空',
	x6: '结算价不能为空',
	x7: '快递公司名称不能为空',
	x8: '虚拟条码有英文字母和数字组成，请合理输入',
	x9: '商品名称不能为空',
	xa: '请选中需要新增的赠品',
	// --------
	y0: '保存失败！',
	y1: '不能为空！', //AAA cannot be empty
	y2: '是否确认导出？',
	y3: '数量过大，请使用导入功能设置是否到达！',
	y4: '作废成功！',
	y5: '作废失败！',
	y6: '导出失败！',
	y7: '请选择物流区域！',
	y8: '的物流优先级为空,保存会导致该数据删除,是否确认保存？',
	y9: '优先级设置重复！',
	ya: '开户银行不能为空',
	yb: '开户行账号不能为空',
	yc: '当前操作会给订单打上加急发货【急】标识，请确认！',
	yd: '会员加急发货打标成功',
	ye: '请选择物流公司',
	yf: '替换前商品sku不能为空',
	yg: '替换后商品sku码不能为空',
	yh: '替换商品与被替换商品不能相同',
	yi: '请填写收货人手机',
	yj: '请填写收货人名称',
	yk: '请填写省份！',
	yl: '请填写城市！',
	ym: '请填写详细地址！',
	yn: '收货人手机不合法',
	yo: '收货人电话不合法',
	yp: '邮编不合法',
	yq: '收货人电话不合法',
	yr: '请正确填写省份',
	ys: '请正确填写城市',
	yt: '请正确填写区县',
	yu: '省份查询失败',
	yv: '请先选择省份',
	yw: '城市查询失败',
	yx: '请先选择城市',
	yy: '区县查询失败',
	yz: '请选中订单数据',
	z0: '当前的操作会执行全量导出，导出时间可能会比较慢！是否继续导出？',
	z1: '反客审成功！',
	z2: '导出成功！',
	z3: '失败！',
	z4: '列表没有数据,无法导出！',
	z5: '点击后将删除凭证,是否继续?',
	z6: '数量只能录入正整数！',
	z7: '应付金额只能录入大于0的数字！',
	z8: '获取详情失败！',
	z9: '保存成功！',
	za: '注意：上传文件中，不要放置宏或图标，不要更改列的顺序，数据中不要使用公式。',
	zb: '文件最大64M',
	zc: '数据正在导入中，请稍候...',
	zd: '导入失败',
	ze: '导入成功',
	zf: '将',
	zg: '替换为',
	zh: '是否确认修改备注！',
	zi: '请选择仓库',
	zj: '出仓单不能为空',
	zk: '至少选择一条订单明细',
	zl: '请选中其中一条记录',
	zm: '请选中一条记录',
	zn: 'HOLD单原因不能为空',
	zo: '指定时点释放的时间不能为空',
	zp: '指定时点释放的时间不能小于当前时间',
	zq: '固定时长后释放的固定时长只能是整数',
	zr: '固定时长后释放的相关数据不能为空',
	zs: '释放时点不能为空',
	zt: 'sku查询失败',
	zu: '请勾选订单数据',
	zv: '开专用发票必须跟开票专员确认',
	zw: '发票抬头不能为空',
	zx: '识别号不能为空',
	zy: '公司地址不能为空',
	zz: '电话号码不能为空',
}