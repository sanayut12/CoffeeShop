namespace สมัครสมาชิก
{
    partial class Form4
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form4));
            this.label5 = new System.Windows.Forms.Label();
            this.listView_order = new System.Windows.Forms.ListView();
            this.SuspendLayout();
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.BackColor = System.Drawing.Color.Transparent;
            this.label5.Font = new System.Drawing.Font("DilleniaUPC", 31.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.Color.Black;
            this.label5.Location = new System.Drawing.Point(596, 23);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(354, 70);
            this.label5.TabIndex = 29;
            this.label5.Text = "รายการสั่งสินค้า (Order)";
            this.label5.Click += new System.EventHandler(this.label5_Click);
            // 
            // listView_order
            // 
            this.listView_order.HideSelection = false;
            this.listView_order.Location = new System.Drawing.Point(45, 97);
            this.listView_order.Name = "listView_order";
            this.listView_order.Size = new System.Drawing.Size(1333, 540);
            this.listView_order.TabIndex = 30;
            this.listView_order.UseCompatibleStateImageBehavior = false;
            this.listView_order.Click += new System.EventHandler(this.listView_order_Click);
            // 
            // Form4
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1440, 670);
            this.Controls.Add(this.listView_order);
            this.Controls.Add(this.label5);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form4";
            this.Text = "Form4";
            this.Load += new System.EventHandler(this.Form4_Load);
            this.Click += new System.EventHandler(this.Form4_Click);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.ListView listView_order;
    }
}