<template>
  <!-- 内容区域  start-->
  <div>
    <el-card class="box-card w1200">
      <div class="tablecontent">
        <!-- 表格展示 1 -->
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pagesize,
              currentPage * pagesize
            )
          "
          border
          stripe
          style="width: 100%"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column fixed prop="taskname" label="任务名称" width="150">
          </el-table-column>

          <el-table-column
            id="kaishitime"
            prop="starttime"
            label="开始时间"
            align="center"
            sortable
            width="180"
            column-key="date"
          >
          </el-table-column>
          <el-table-column
            id="jieshutime"
            prop="endtime"
            label="结束时间"
            align="center"
            sortable
            width="180"
            column-key="date"
          >
          </el-table-column>

          <el-table-column
            prop="taskpeople"
            label="任务发起人"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="Markpart"
            label="标注员"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="inspector"
            label="检查员"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="qualityinspector" label="质检员" width="120">
          </el-table-column>
          <el-table-column
            prop="experts"
            label="专家"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="taskType"
            label="任务类型"
            width="100"
            :filters="[
              { text: '新建', value: '新建' },
              { text: '修改', value: '修改' }
            ]"
            :filter-method="filterTags"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.taskType === '新建' ? 'primary' : 'success'"
                disable-transitions
                >{{ scope.row.taskType }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="Taskstatus"
            label="任务状态"
            width="150"
            :filters="[
              { text: '标注员可领取', value: '标注员可领取' },
              { text: '检查员可领取', value: '检查员可领取' },
              { text: '质检员可领取', value: '质检员可领取' },
              { text: '专家可领取', value: '专家可领取' },
              { text: '完成', value: '完成' }
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.Taskstatus === '完成' ? 'primary' : 'success'"
                disable-transitions
                >{{ scope.row.Taskstatus }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="versionnum"
            label="版本号"
            width="70"
            align="center"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
            align="center"
          >
            <template>
              <el-button
                ref="lingqutask"
                id="lingqurenwu"
                type="primary"
                size="small"
                @click="choose_card1"
                >领取任务</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格展示 2 -->
        <!-- 分页 1 -->
        <div class="fenye">
          <el-pagination
            @current-change="handleCurrentChanges"
            background
            layout="prev, pager, next"
            :total="tableData.length"
            align="center"
          >
          </el-pagination>
        </div>
        <!-- 分页 2 -->
      </div>
    </el-card>
  </div>
  <!-- 内容区域 end-->
  <!-- 领取任务弹窗 1 -->
  <!-- 领取任务弹窗 2 -->
</template>
<script>
import $ from 'jquery'
import 'element-ui'

// import 'element-ui'
export default {
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      tableData: [
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条001',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条002',
          starttime: '2019-07-10 22:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '专家可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条003',
          starttime: '2019-07-10 23:16:05',
          endtime: '2019-07-11 17:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条004',
          starttime: '2019-07-10 00:16:05',
          endtime: '2019-07-11 16:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条005',
          starttime: '2019-07-10 11:16:05',
          endtime: '2019-07-11 14:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条006',
          starttime: '2019-07-10 12:16:05',
          endtime: '2019-07-11 13:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条007',
          starttime: '2019-07-10 14:16:05',
          endtime: '2019-07-11 11:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条008',
          starttime: '2019-07-10 20:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条009',
          starttime: '2019-07-10 20:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条010',
          starttime: '2019-07-10 20:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条011',
          starttime: '2019-07-10 20:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条012',
          starttime: '2019-07-10 20:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '完成',
          versionnum: '1'
        }
      ]
    }
  },
  mounted () {
    // 点击首页跳转页面 1
    $('.index').click(function () {
      $('a', this)[0].click()
    })
    // 点击首页跳转页面 2
    // 领取任务 1

    // 领取任务 2
  },
  methods: {
    // 切换页面
    handleCurrentChange (val) {
      this.currentRow = val
    },
    handleCurrentChanges: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    choose_card1 () {
      this.$refs.button11.text = '编辑任务'
    },
    // 任务类型
    filterTags (value, row) {
      return row.taskType === value
    },
    // 任务状态
    filterTag (value, row) {
      return row.Taskstatus === value
    }
  }
}
</script>
<style scoped lang="scss">
.fenye {
  margin-top: 10px;
}
</style>
