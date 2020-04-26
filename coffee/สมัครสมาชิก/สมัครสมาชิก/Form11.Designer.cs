namespace สมัครสมาชิก
{
    partial class Form11
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.Windows.Forms.DataVisualization.Charting.ChartArea chartArea3 = new System.Windows.Forms.DataVisualization.Charting.ChartArea();
            System.Windows.Forms.DataVisualization.Charting.Legend legend3 = new System.Windows.Forms.DataVisualization.Charting.Legend();
            System.Windows.Forms.DataVisualization.Charting.Series series3 = new System.Windows.Forms.DataVisualization.Charting.Series();
            this.label1 = new System.Windows.Forms.Label();
            this.chart_sell = new System.Windows.Forms.DataVisualization.Charting.Chart();
            this.comboBox_yy = new System.Windows.Forms.ComboBox();
            this.comboBox_mm = new System.Windows.Forms.ComboBox();
            this.comboBox_dd = new System.Windows.Forms.ComboBox();
            this.button1 = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.chart_sell)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.Color.Transparent;
            this.label1.Font = new System.Drawing.Font("DilleniaUPC", 22.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(10, 5);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(239, 50);
            this.label1.TabIndex = 3;
            this.label1.Text = "สรุปยอดการขายรายวัน";
            // 
            // chart_sell
            // 
            chartArea3.Name = "ChartArea1";
            this.chart_sell.ChartAreas.Add(chartArea3);
            legend3.Name = "Legend1";
            this.chart_sell.Legends.Add(legend3);
            this.chart_sell.Location = new System.Drawing.Point(10, 55);
            this.chart_sell.Name = "chart_sell";
            series3.ChartArea = "ChartArea1";
            series3.Legend = "Legend1";
            series3.Name = "Series1";
            this.chart_sell.Series.Add(series3);
            this.chart_sell.Size = new System.Drawing.Size(1018, 506);
            this.chart_sell.TabIndex = 8;
            this.chart_sell.Text = "chart1";
            this.chart_sell.Click += new System.EventHandler(this.chart_menu_Click);
            // 
            // comboBox_yy
            // 
            this.comboBox_yy.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.comboBox_yy.FormattingEnabled = true;
            this.comboBox_yy.Items.AddRange(new object[] {
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030"});
            this.comboBox_yy.Location = new System.Drawing.Point(1167, 55);
            this.comboBox_yy.Name = "comboBox_yy";
            this.comboBox_yy.Size = new System.Drawing.Size(121, 30);
            this.comboBox_yy.TabIndex = 9;
            // 
            // comboBox_mm
            // 
            this.comboBox_mm.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.comboBox_mm.FormattingEnabled = true;
            this.comboBox_mm.Items.AddRange(new object[] {
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"});
            this.comboBox_mm.Location = new System.Drawing.Point(1167, 91);
            this.comboBox_mm.Name = "comboBox_mm";
            this.comboBox_mm.Size = new System.Drawing.Size(121, 30);
            this.comboBox_mm.TabIndex = 10;
            // 
            // comboBox_dd
            // 
            this.comboBox_dd.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.comboBox_dd.FormattingEnabled = true;
            this.comboBox_dd.Items.AddRange(new object[] {
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"});
            this.comboBox_dd.Location = new System.Drawing.Point(1167, 127);
            this.comboBox_dd.Name = "comboBox_dd";
            this.comboBox_dd.Size = new System.Drawing.Size(121, 30);
            this.comboBox_dd.TabIndex = 11;
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("DilleniaUPC", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(1167, 177);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(121, 45);
            this.button1.TabIndex = 12;
            this.button1.Text = "ค้นหา";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.BackColor = System.Drawing.Color.Transparent;
            this.label2.Font = new System.Drawing.Font("DilleniaUPC", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(1080, 49);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(51, 40);
            this.label2.TabIndex = 13;
            this.label2.Text = "ค.ศ.";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.BackColor = System.Drawing.Color.Transparent;
            this.label3.Font = new System.Drawing.Font("DilleniaUPC", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(1080, 89);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(57, 40);
            this.label3.TabIndex = 14;
            this.label3.Text = "เดือน";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.BackColor = System.Drawing.Color.Transparent;
            this.label4.Font = new System.Drawing.Font("DilleniaUPC", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(1081, 129);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(50, 40);
            this.label4.TabIndex = 15;
            this.label4.Text = "วันที่";
            // 
            // Form11
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1300, 600);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.comboBox_dd);
            this.Controls.Add(this.comboBox_mm);
            this.Controls.Add(this.comboBox_yy);
            this.Controls.Add(this.chart_sell);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form11";
            this.Text = "Form11";
            this.TopMost = true;
            this.Load += new System.EventHandler(this.Form11_Load);
            ((System.ComponentModel.ISupportInitialize)(this.chart_sell)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.DataVisualization.Charting.Chart chart_sell;
        private System.Windows.Forms.ComboBox comboBox_yy;
        private System.Windows.Forms.ComboBox comboBox_mm;
        private System.Windows.Forms.ComboBox comboBox_dd;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
    }
}