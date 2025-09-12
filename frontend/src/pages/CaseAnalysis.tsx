import React, { useState } from "react";
import { Upload, FileText, AlertTriangle, CheckCircle, Clock, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CaseAnalysis = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const analysisResults = {
    riskLevel: "medium",
    confidence: 87,
    summary: "This employment contract contains several standard clauses with two areas requiring attention regarding termination notice and non-compete restrictions.",
    keyFindings: [
      {
        type: "warning",
        title: "Extended Non-Compete Period",
        description: "The 24-month non-compete clause exceeds typical industry standards of 6-12 months.",
        suggestion: "Consider negotiating a shorter non-compete period or requesting geographic limitations."
      },
      {
        type: "info",
        title: "Standard Termination Clause",
        description: "The 30-day notice period aligns with industry standards.",
        suggestion: "This clause is fair and protects both parties."
      },
      {
        type: "success",
        title: "Comprehensive Benefits Package",
        description: "The benefits section includes healthcare, dental, and retirement contributions.",
        suggestion: "These benefits are competitive for the industry."
      }
    ],
    legalReferences: [
      "California Labor Code Section 2870 - Employee Inventions",
      "Business and Professions Code Section 16600 - Non-Compete Restrictions"
    ]
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Simulate analysis
      setTimeout(() => setAnalysisComplete(true), 3000);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-primary-text";
    }
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "low": return "default";
      case "medium": return "secondary";
      case "high": return "destructive";
      default: return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "success": return <CheckCircle className="w-5 h-5 text-success" />;
      default: return <FileText className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-bg p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-plus font-bold text-black">Document Analysis</h1>
            <p className="text-primary-text mt-2">Upload your legal document for AI-powered analysis and insights</p>
          </div>
        </div>

        {!uploadedFile ? (
          /* Upload Section */
          <Card className="border-dashed border-2 border-primary/25 bg-gradient-to-br from-shade-1/30 to-white">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Upload className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-plus font-semibold text-black mb-4">Upload Your Legal Document</h3>
              <p className="text-primary-text text-center max-w-md mb-8">
                Drag and drop your PDF document here, or click to browse. Our AI will analyze contracts, agreements, and legal documents.
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="bg-primary hover:bg-primary-hover cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </label>
              <p className="text-sm text-primary-text mt-4">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
            </CardContent>
          </Card>
        ) : (
          /* Analysis Results */
          <div className="space-y-8">
            {/* File Info and Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{uploadedFile.name}</CardTitle>
                      <CardDescription>
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Uploaded {new Date().toLocaleString()}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {analysisComplete ? (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary-text">Analyzing...</span>
                      </div>
                    )}
                  </div>
                </div>
                {!analysisComplete && (
                  <Progress value={75} className="mt-4" />
                )}
              </CardHeader>
            </Card>

            {analysisComplete && (
              <>
                {/* Risk Summary */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-shade-1/20 to-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-primary-text">Risk Level</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getRiskBadgeVariant(analysisResults.riskLevel)} className="text-lg px-3 py-1">
                          {analysisResults.riskLevel.toUpperCase()}
                        </Badge>
                        <span className={`text-2xl font-bold ${getRiskColor(analysisResults.riskLevel)}`}>
                          {analysisResults.confidence}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-primary-text">Analysis Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">2.3s</div>
                      <p className="text-sm text-primary-text">Processed instantly</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-primary-text">Document Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">Employment Contract</div>
                      <p className="text-sm text-primary-text">Auto-detected</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Analysis Results Tabs */}
                <Tabs defaultValue="summary" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="findings">Key Findings</TabsTrigger>
                    <TabsTrigger value="legal">Legal References</TabsTrigger>
                    <TabsTrigger value="recommendations">Actions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary">
                    <Card>
                      <CardHeader>
                        <CardTitle>Document Summary</CardTitle>
                        <CardDescription>AI-generated overview of your document</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="text-base leading-relaxed">
                            {analysisResults.summary}
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="findings">
                    <div className="space-y-4">
                      {analysisResults.keyFindings.map((finding, index) => (
                        <Card key={index}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start space-x-3">
                              {getTypeIcon(finding.type)}
                              <div className="flex-1">
                                <CardTitle className="text-lg">{finding.title}</CardTitle>
                                <CardDescription className="mt-2">{finding.description}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="bg-shade-1/30 p-4 rounded-lg">
                              <h4 className="font-semibold text-primary mb-2">Suggestion:</h4>
                              <p className="text-primary-text">{finding.suggestion}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="legal">
                    <Card>
                      <CardHeader>
                        <CardTitle>Relevant Legal References</CardTitle>
                        <CardDescription>Laws and regulations that apply to this document</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {analysisResults.legalReferences.map((reference, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-primary-text">{reference}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="recommendations">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recommended Actions</CardTitle>
                        <CardDescription>Next steps based on our analysis</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Button className="w-full justify-start bg-primary hover:bg-primary-hover">
                            <FileText className="w-4 h-4 mr-2" />
                            Generate Negotiation Points Document
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Analysis with Legal Advisor
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="w-4 h-4 mr-2" />
                            Export Detailed Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseAnalysis;