# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'browser.ui'
#
# Created: Thu Mar  1 02:41:08 2012
#      by: PyQt4 UI code generator 4.8.3
#
# WARNING! All changes made in this file will be lost!

from PyQt4 import QtCore, QtGui

try:
    _fromUtf8 = QtCore.QString.fromUtf8
except AttributeError:
    _fromUtf8 = lambda s: s

class Ui_MyBrowser(object):
    def setupUi(self, NewBrowser):
        NewBrowser.setObjectName(_fromUtf8("NewBrowser"))
        NewBrowser.setGeometry(QtCore.QRect(0, 0, 800, 600))
        self.horizontalLayout = QtGui.QHBoxLayout(NewBrowser)
        self.horizontalLayout.setSpacing(3)
        self.horizontalLayout.setMargin(0)
        self.horizontalLayout.setObjectName(_fromUtf8("horizontalLayout"))
        self.webView = QtWebKit.QWebView(NewBrowser)
        self.webView.setUrl(QtCore.QUrl(_fromUtf8("http://www.google.lk/")))
        self.webView.setObjectName(_fromUtf8("webView"))
        self.horizontalLayout.addWidget(self.webView)

        self.retranslateUi(NewBrowser)
        QtCore.QMetaObject.connectSlotsByName(NewBrowser)

    def retranslateUi(self, NewBrowser):
        NewBrowser.setWindowTitle(QtGui.QApplication.translate("MyBrowser", "MyBrowser", None, QtGui.QApplication.UnicodeUTF8))

from PyQt4 import QtWebKit

if __name__ == "__main__":
    import sys
    app = QtGui.QApplication(sys.argv)
    NewBrowser = QtGui.QWidget()
    ui = Ui_MyBrowser()
    ui.setupUi(NewBrowser)
    NewBrowser.show()
    sys.exit(app.exec_())

