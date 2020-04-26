namespace สมัครสมาชิก
{
    partial class Form5
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form5));
            this.label5 = new System.Windows.Forms.Label();
            this.listView_checkbill = new System.Windows.Forms.ListView();
            this.label_staffid = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.BackColor = System.Drawing.Color.Transparent;
            this.label5.Font = new System.Drawing.Font("DilleniaUPC", 31.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.Color.Black;
            this.label5.Location = new System.Drawing.Point(613, 14);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(182, 70);
            this.label5.TabIndex = 32;
            this.label5.Text = "Check Bill";
            // 
            // listView_checkbill
            // 
            this.listView_checkbill.HideSelection = false;
            this.listView_checkbill.Location = new System.Drawing.Point(49, 87);
            this.listView_checkbill.Name = "listView_checkbill";
            this.listView_checkbill.Size = new System.Drawing.Size(1333, 540);
            this.listView_checkbill.TabIndex = 33;
            this.listView_checkbill.UseCompatibleStateImageBehavior = false;
            this.listView_checkbill.Click += new System.EventHandler(this.listView_checkbill_Click);
            // 
            // label_staffid
            // 
            this.label_staffid.AutoSize = true;
            this.label_staffid.Location = new System.Drawing.Point(1312, 48);
            this.label_staffid.Name = "label_staffid";
            this.label_staffid.Size = new System.Drawing.Size(50, 17);
            this.label_staffid.TabIndex = 34;
            this.label_staffid.Text = "StaffID";
            // 
            // Form5
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1440, 670);
            this.Controls.Add(this.label_staffid);
            this.Controls.Add(this.listView_checkbill);
            this.Controls.Add(this.label5);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form5";
            this.RightToLeft = System.Windows.Forms.RightToLeft.Yes;
            this.Text = " ";
            this.Load += new System.EventHandler(this.Form5_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.ListView listView_checkbill;
        private System.Windows.Forms.Label label_staffid;
    }
}