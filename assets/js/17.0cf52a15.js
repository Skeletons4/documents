(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(t,r,e){"use strict";e.r(r);var v=e(45),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"操作场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作场景"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),e("p",[t._v("当成功安装 TKE Stack 控制台后，您可参考本文通过 TKE Stack 控制台创建独立集群或导入集群。")]),t._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),e("p",[t._v("已参考 "),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/1205/43557",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台安装"),e("OutboundLink")],1),t._v(" 成功安装 TKE Stack 控制台。")]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("h3",{attrs:{id:"新建独立集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建独立集群"}},[t._v("#")]),t._v(" 新建独立集群")]),t._v(" "),e("ol",[e("li",[t._v("登录 TKE Stack 控制台，选择左侧导航栏中的【集群管理】。")]),t._v(" "),e("li",[t._v("在“集群管理”列表页面，单击【新建独立集群】。")]),t._v(" "),e("li",[t._v("在“新建独立集群”页面，参考以下提示设置集群基本信息。如下图所示：\n"),e("img",{attrs:{src:"https://main.qcloudimg.com/raw/b333a31986c55cb4492d9f34cc6bdb25.png",alt:""}}),t._v(" "),e("ul",[e("li",[e("strong",[t._v("集群名称")]),t._v("：支持中文，小于60字符。")]),t._v(" "),e("li",[e("strong",[t._v("Kubernetes版本")]),t._v("：选择需要的 Kubernetes 版本。各版本特性对比请查看 "),e("a",{attrs:{href:"https://kubernetes.io/docs/home/supported-doc-versions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supported Versions of the Kubernetes Documentation"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("网卡名称")]),t._v("： 最长63个字符，只能包含小写字母、数字及分隔符"),e("code",[t._v("-")]),t._v("，且必须以小写字母开头，数字或小写字母结尾。")]),t._v(" "),e("li",[e("strong",[t._v("高可用类型")]),t._v("：请按需选择，本文以【不使用】为例。\n"),e("ul",[e("li",[e("strong",[t._v("不使用")]),t._v("：访问第一台 master 节点的 APIServer。")]),t._v(" "),e("li",[e("strong",[t._v("使用已有")]),t._v("：在用户自定义 VIP 情况下，VIP 后端需要绑定6443（kube-apiserver）端口。同时请确保该 VIP 有至少两个负载均衡后端（master），由于负载均衡自身路由问题，单负载均衡后端情况下存在集群不可用风险。")]),t._v(" "),e("li",[e("strong",[t._v("TKE提供")]),t._v("：用户需要提供一个可用的 IP 地址，确保该 IP 和各 master 节点可以正常联通，TKE 会为集群部署 keepalived 并配置该 IP 为 VIP。")])])]),t._v(" "),e("li",[e("strong",[t._v("GPU")]),t._v("：选择是否安装 GPU 相关依赖，本文以不安装为例。")]),t._v(" "),e("li",[e("strong",[t._v("pGPU")]),t._v("：自动为集群安装 "),e("a",{attrs:{href:"https://github.com/tkestack/docs/blob/master/features/gpumanager.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPUManager"),e("OutboundLink")],1),t._v(" 扩展组件。")]),t._v(" "),e("li",[e("strong",[t._v("vGPU")]),t._v("：自动为集群安装 "),e("a",{attrs:{href:"https://github.com/NVIDIA/k8s-device-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia-k8s-device-plugin"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("容器网络")]),t._v("：将为集群内容器分配在容器网络地址范围内的 IP 地址，您可以自定义三大私有网段作为容器网络。根据您选择的集群内服务数量的上限，自动分配适当大小的 CIDR 段用于 kubernetes service。根据您选择 Pod 数量上限/节点，自动为集群内每台云服务器分配一个适当大小的网段用于该主机分配 Pod 的 IP 地址。\n"),e("ul",[e("li",[e("strong",[t._v("CIDR")]),t._v("： 集群内 Sevice、 Pod 等资源所在网段。")]),t._v(" "),e("li",[e("strong",[t._v("Pod数量上限/节点")]),t._v("： 分配给每个 Node 的 CIDR 大小。")]),t._v(" "),e("li",[e("strong",[t._v("Service数量上限/集群")]),t._v("：分配给 Sevice 的 CIDR 大小。")]),t._v(" "),e("li",[e("strong",[t._v("目标机器")]),t._v("：Master&Etcd 节点的内网 IP，建议节点配置4核及以上机型。")]),t._v(" "),e("li",[e("strong",[t._v("SSH端口")]),t._v("：请确保目标机器安全组放通22端口和 ICMP 协议，否则无法远程登录和 Ping 通。")]),t._v(" "),e("li",[e("strong",[t._v("主机label")]),t._v("：设置主机 Label，可用于指定容器调度。")]),t._v(" "),e("li",[e("strong",[t._v("认证方式")]),t._v("：\n"),e("ul",[e("li",[e("strong",[t._v("密码认证")]),t._v("：目标机器密码。")]),t._v(" "),e("li",[e("strong",[t._v("密钥认证")]),t._v("：\n"),e("ul",[e("li",[e("strong",[t._v("私钥")]),t._v("：目标机器私钥。")]),t._v(" "),e("li",[e("strong",[t._v("私钥密码")]),t._v("：目标机器私钥密码，可选填。")])])]),t._v(" "),e("li",[e("strong",[t._v("GPU")]),t._v("：目标机器是否为 GPU 机型，使用 GPU 机器需提前安装驱动和 runtime。\n"),e("blockquote",[e("p",[t._v("?填写完目标机器信息后，请单击目标机器模块下方的【保存】。如【保存】为置灰不可选状态，请单击空白处，可选后再单击【保存】。")])])])])])])])])])]),t._v(" "),e("blockquote"),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("单击【提交】即可在“集群管理”页面查看创建进度。")])]),t._v(" "),e("h3",{attrs:{id:"导入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入集群"}},[t._v("#")]),t._v(" 导入集群")]),t._v(" "),e("ol",[e("li",[t._v("选择左侧导航栏中的【集群管理】，进入“集群管理”列表页面。")]),t._v(" "),e("li",[t._v("在“集群管理”列表页面，单击【导入集群】。")]),t._v(" "),e("li",[t._v("在“导入集群”页面，参考以下提示填写被导入集群的信息。如下图所示：\n"),e("img",{attrs:{src:"https://main.qcloudimg.com/raw/0ccb71d80959b790fc47a9b1f44ddecd.png",alt:""}})])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("名称")]),t._v("：被导入集群的名称，最长60字符。")]),t._v(" "),e("li",[e("strong",[t._v("API Server")]),t._v("： 输入要被导入集群的 API server 的 IP 和端口。")]),t._v(" "),e("li",[e("strong",[t._v("CertFile")]),t._v("：输入被导入集群的 cert 文件内容。")]),t._v(" "),e("li",[e("strong",[t._v("Token")]),t._v("：输入被导入集群创建时的 token 值。")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("单击【提交】即可在“集群管理”页面查看进度。")])]),t._v(" "),e("h2",{attrs:{id:"相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[t._v("#")]),t._v(" 相关操作")]),t._v(" "),e("p",[t._v("请参考 "),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/1205/43598",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建业务及服务"),e("OutboundLink")],1),t._v(" 在集群内创建业务或服务。")])])}),[],!1,null,null,null);r.default=_.exports}}]);