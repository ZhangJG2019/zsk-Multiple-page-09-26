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
          align="center"
        >
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column
            fixed
            prop="taskname"
            label="任务名称"
            width="150"
            align="center"
          >
          </el-table-column>

          <el-table-column
            id="kaishitime"
            prop="starttime"
            label="开始时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <el-table-column
            id="jieshutime"
            prop="endtime"
            label="结束时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
          >
            <i class="el-icon-time"></i>
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
          <el-table-column
            prop="qualityinspector"
            label="质检员"
            width="120"
            align="center"
          >
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
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="Taskstatus"
            label="任务状态"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="versionnum"
            label="版本号"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            fixed="right"
            width="130"
          >
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.$index, scope.row)"
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
          Markpart: '111',
          inspector: '222',
          qualityinspector: '333',
          experts: '444',
          taskType: '修改',
          Taskstatus: '检查员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条002',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: '55',
          Markpart: '666',
          inspector: '77',
          qualityinspector: '88',
          experts: '99',
          taskType: '修改',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条003',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '检查员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条004',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '专家可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条005',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条006',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '完成',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条007',
          starttime: '2019-07-10 21:16:05',
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
          taskname: '药物基因用药建议的给出-词条008',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条009',
          starttime: '2019-07-10 21:16:05',
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
          taskname: '药物基因用药建议的给出-词条010',
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
          taskname: '药物基因用药建议的给出-词条011',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '专家可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条012',
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
          taskname: '药物基因用药建议的给出-词条013',
          starttime: '2019-07-10 21:16:05',
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
          taskname: '药物基因用药建议的给出-词条014',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条015',
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
          taskname: '药物基因用药建议的给出-词条016',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '专家可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条017',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '质检员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条018',
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
          taskname: '药物基因用药建议的给出-词条019',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '修改',
          Taskstatus: '标注员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条020',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '质检员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条021',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '质检员可领取',
          versionnum: '1'
        },
        {
          taskname: '药物基因用药建议的给出-词条022',
          starttime: '2019-07-10 21:16:05',
          endtime: '2019-07-11 20:16:05',
          taskpeople: 'administrator',
          Markpart: 'administrator',
          inspector: 'administrator',
          qualityinspector: 'administrator',
          experts: 'administrator',
          taskType: '新建',
          Taskstatus: '专家可领取',
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
